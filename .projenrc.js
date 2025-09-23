/**
 * Copyright (c) Suresh Veeragoni
 * SPDX-License-Identifier: Apache-2.0
 */

const { CdktfProviderProject } = require("@cdktf/provider-project");

const project = new CdktfProviderProject({
  author: 'Suresh Veeragoni',
  authorAddress: 'github@veeragoni.com',
  authorOrganization: false,
  defaultReleaseBranch: 'main',
  name: 'cdktf-provider-oci',
  repositoryUrl: 'https://github.com/veeragoni/cdktf-provider-oci.git',
  description: 'Prebuilt Oracle Cloud Infrastructure (OCI) Provider for Terraform CDK (cdktf)',

  terraformProvider: 'oracle/oci@~> 7.19.0',
  cdktfVersion: '^0.21.0',
  constructsVersion: '^10.4.2',
  minNodeVersion: '20.9.0',
  typescriptVersion: '~5.8.0',
  jsiiVersion: '~5.8.0',

  // Only enable specific publishing targets
  releaseToNpm: true,
  publishToPypi: {
    distName: 'cdktf-provider-oci',
    module: 'cdktf_provider_oci',
  },

  // Explicitly disable unwanted targets
  publishToMaven: false,
  publishToNuget: false,
  publishToGo: false,

  keywords: [
    'oci',
    'oracle',
    'oracle-cloud',
    'oracle-cloud-infrastructure',
    'cdk',
    'cdktf',
    'terraform',
    'provider'
  ],

  devDeps: [
    '@cdktf/provider-project@^0.7.0',
    'cdktf-cli@^0.21.0',
    'dot-prop@^5.2.0',
  ],

  isDeprecated: false,

  // Configure release workflow to only build and publish Python and TypeScript
  releaseToNpm: true,
  workflowNodeVersion: '20.9.0',

  // Environment variables for publishing
  npmDistTag: 'latest',
  npmRegistry: 'https://registry.npmjs.org/',
});

// Mark generated src files as linguist-generated
project.gitattributes.addAttributes('/src/**', 'linguist-generated');

// Clean configuration for Python and TypeScript only

// Fix package.json and workflows after synthesis
project.postSynthesize = () => {
  const fs = require('fs');
  const { execSync } = require('child_process');
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

  // Update author information
  packageJson.author = {
    name: 'Suresh Veeragoni',
    email: 'github@veeragoni.com',
    organization: false
  };

  // Update package name and repository
  packageJson.name = 'cdktf-provider-oci';
  packageJson.repository.url = 'https://github.com/veeragoni/cdktf-provider-oci.git';

  // Only keep Python target in jsii (JavaScript is default)
  packageJson.jsii.targets = {
    python: packageJson.jsii.targets.python
  };

  // Remove unwanted package scripts
  const unwantedScripts = ['package:dotnet', 'package:go', 'package:java'];
  unwantedScripts.forEach(script => {
    if (packageJson.scripts[script]) {
      delete packageJson.scripts[script];
    }
  });

  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');

  const readmePath = 'README.md';
  if (fs.existsSync(readmePath)) {
    try {
      fs.chmodSync(readmePath, 0o600);
    } catch {}
    let readme = fs.readFileSync(readmePath, 'utf8');

    const npmSection = `### npm\n\nPublished from this repository at [https://www.npmjs.com/package/cdktf-provider-oci](https://www.npmjs.com/package/cdktf-provider-oci) (owner: sureshveeragoni).\n\n\`npm install cdktf-provider-oci\`\n\n`;
    const pypiSection = `### PyPI\n\nPublished at [https://pypi.org/project/cdktf-provider-oci](https://pypi.org/project/cdktf-provider-oci/) (owner: sureshveeragoni).\n\n\`pip install cdktf-provider-oci\`\n\n`;

    const npmStart = readme.indexOf('### NPM');
    const pypiStart = readme.indexOf('### PyPI');
    if (npmStart !== -1 && pypiStart !== -1) {
      const sectionAfter = readme.indexOf('## Docs', pypiStart);
      readme = readme.slice(0, npmStart) + npmSection + pypiSection + (sectionAfter !== -1 ? readme.slice(sectionAfter) : '');
    }

    const docsStart = readme.indexOf('## Docs');
    const versioningStart = readme.indexOf('## Versioning');
    if (docsStart !== -1 && versioningStart !== -1) {
      const docsText = `## Docs\n\nRelease builds publish TypeScript and Python API references. Generate them locally with \`yarn docgen\` (output under \`docs/\`).\n\n`;
      readme = readme.slice(0, docsStart) + docsText + readme.slice(versioningStart);
    }

    fs.writeFileSync(readmePath, readme);
  }

  const issueConfigPath = '.github/ISSUE_TEMPLATE/config.yml';
  if (fs.existsSync(issueConfigPath)) {
    try {
      fs.chmodSync(issueConfigPath, 0o600);
    } catch {}
    let issueConfig = fs.readFileSync(issueConfigPath, 'utf8');
    issueConfig = issueConfig.replace(
      /(url:\s*")[^"]+("?)/,
      `$1https://github.com/veeragoni/cdktf-provider-oci/issues/new/choose$2`
    );
    issueConfig = issueConfig.replace(
      /Please file issues with pre-built providers in our main repository\./,
      'Report problems or request features for this provider directly in this repository.'
    );
    fs.writeFileSync(issueConfigPath, issueConfig);
  }

  const codeownersPath = '.github/CODEOWNERS';
  if (fs.existsSync(codeownersPath)) {
    try {
      fs.chmodSync(codeownersPath, 0o600);
    } catch {}
    let codeowners = fs.readFileSync(codeownersPath, 'utf8');
    codeowners = codeowners.replace(/\*\s+@.+/, '*       @veeragoni');
    fs.writeFileSync(codeownersPath, codeowners);
  }

  const shouldReleasePath = 'scripts/should-release.js';
  if (fs.existsSync(shouldReleasePath)) {
    try {
      fs.chmodSync(shouldReleasePath, 0o600);
    } catch {}
    let shouldRelease = fs.readFileSync(shouldReleasePath, 'utf8');
    let updated = false;

    const originalBlock = /const thingsToDiff = \[\s*{\s*name: "Terraform provider version",\s*previous: prevPackageJson\.cdktf\.provider\.version,\s*current: currPackageJson\.cdktf\.provider\.version,\s*},\s*{\s*name: "cdktf peer dependency",\s*previous: prevPackageJson\.peerDependencies\.cdktf,\s*current: currPackageJson\.peerDependencies\.cdktf,\s*},\s*\];/s;
    if (originalBlock.test(shouldRelease)) {
      shouldRelease = shouldRelease.replace(
        originalBlock,
        `const prevProviderVersion =\n      prevPackageJson?.cdktf?.provider?.version ?? "<missing>";\n    const currProviderVersion =\n      currPackageJson?.cdktf?.provider?.version ?? "<missing>";\n\n    const prevPeerCdktf =\n      prevPackageJson?.peerDependencies?.cdktf ?? "<missing>";\n    const currPeerCdktf =\n      currPackageJson?.peerDependencies?.cdktf ?? "<missing>";\n\n    const thingsToDiff = [\n      {\n        name: "Terraform provider version",\n        previous: prevProviderVersion,\n        current: currProviderVersion,\n      },\n      {\n        name: "cdktf peer dependency",\n        previous: prevPeerCdktf,\n        current: currPeerCdktf,\n      },\n    ];`
      );
      updated = true;
    }

    if (!shouldRelease.includes('FORCE_RELEASE flag detected; bypassing change detection.')) {
      shouldRelease = shouldRelease.replace(
        '  // inspired by https://github.com/projen/projen/blob/08378c40d1453288053abcddce82475329b4506e/src/release/bump-version.ts#L281\n',
        "  const forceRelease = String(process.env.FORCE_RELEASE || '').toLowerCase();\n  if (forceRelease === '1' || forceRelease === 'true') {\n    console.log('FORCE_RELEASE flag detected; bypassing change detection.');\n    return;\n  }\n\n  // inspired by https://github.com/projen/projen/blob/08378c40d1453288053abcddce82475329b4506e/src/release/bump-version.ts#L281\n"
      );
      updated = true;
    }

    if (updated) {
      fs.writeFileSync(shouldReleasePath, shouldRelease);
    }
  }

  // Fix the release workflow to remove unwanted jobs
  const releaseWorkflowPath = '.github/workflows/release.yml';
  if (fs.existsSync(releaseWorkflowPath)) {
    // Make the file writable first
    try {
      execSync(`chmod +w "${releaseWorkflowPath}"`, { stdio: 'ignore' });
    } catch {}

    let releaseContent = fs.readFileSync(releaseWorkflowPath, 'utf8');

    // Fix the deprecate job to use correct package name
    releaseContent = releaseContent.replace(
      '@cdktf/provider-oci',
      'cdktf-provider-oci'
    );

    // Ensure npm publish jobs use a valid registry URL
    releaseContent = releaseContent.replace(
      /https\/\/https\/\/registry\.npmjs\.org\//g,
      'https://registry.npmjs.org/'
    );
    releaseContent = releaseContent.replace(
      /https\/\/registry\.npmjs\.org\//g,
      'https://registry.npmjs.org/'
    );

    // Add a manual force release input and propagate environment variable
    releaseContent = releaseContent.replace(
      '  workflow_dispatch: {}\n',
      '  workflow_dispatch:\n    inputs:\n      force:\n        description: Force release even if versions unchanged\n        required: false\n        default: "false"\n'
    );
    releaseContent = releaseContent.replace(
      '    env:\n      CI: "true"\n',
      "    env:\n      CI: \"true\"\n      FORCE_RELEASE: ${{ github.event.inputs.force || 'false' }}\n"
    );

    // Remove unwanted release jobs by finding their sections and removing them
    const jobsToRemove = ['release_maven', 'release_nuget', 'release_golang'];

    jobsToRemove.forEach(jobName => {
      // Find the job section and remove everything until the next job or end of file
      const jobRegex = new RegExp(`  ${jobName}:[\\s\\S]*?(?=\\n  [a-z_]+:|$)`, 'g');
      releaseContent = releaseContent.replace(jobRegex, '');
    });

    // Also remove these jobs from the deprecate job dependencies
    releaseContent = releaseContent.replace(
      /needs:\s*\[\s*-\s*release\s*-\s*release_npm\s*\]/,
      'needs:\n      - release\n      - release_npm'
    );

    fs.writeFileSync(releaseWorkflowPath, releaseContent);
  }

  // Remove unused workflows
  const unusedWorkflows = [
    'alert-open-prs.yml',
    'auto-close-community-issues.yml',
    'auto-close-community-prs.yml',
    'fix-jest.sh',
    'force-release.yml',
    'lock.yml',
    'stale.yml'
  ];

  unusedWorkflows.forEach(workflow => {
    const workflowPath = `.github/workflows/${workflow}`;
    if (fs.existsSync(workflowPath)) {
      fs.unlinkSync(workflowPath);
    }
  });

  try {
    execSync('node scripts/generate-index.cjs', { stdio: 'inherit' });
  } catch (error) {
    console.warn('Warning: failed to regenerate src/index.ts during post-synthesize.', error);
  }
};

project.addScripts({
  'check-if-new-provider-version': 'node scripts/check-for-upgrades.js',
  'fetch': 'npx projen fetch',
  'commit': 'git add -A && git commit -am "Update provider" || echo "No changes to commit"',
  'should-release': 'node scripts/should-release.js',
  'prebump': 'yarn fetch && yarn compile && yarn run commit && yarn run should-release',
  'build-provider': 'yarn fetch && yarn compile && yarn docgen',
  'generate:index': 'node scripts/generate-index.cjs',
});

const generateIndexTask = project.addTask('generate-index', {
  exec: 'node scripts/generate-index.cjs',
});

const fetchTask = project.tasks.tryFind('fetch');
fetchTask?.exec('node scripts/generate-index.cjs');

const preCompileTask = project.tasks.tryFind('pre-compile');
preCompileTask?.prependExec('node scripts/generate-index.cjs');

const docgenTask = project.tasks.tryFind('docgen');
if (!docgenTask) {
  console.warn('Warning: docgen task not found; docs languages not adjusted.');
} else {
  docgenTask.reset();
  docgenTask.exec('node scripts/generate-docs.cjs');
  console.log('Customized docgen task to generate TypeScript/Python docs only.');
}

const packageAllTask = project.tasks.tryFind('package-all');
if (!packageAllTask) {
  console.warn('Warning: package-all task not found; skipping language pruning.');
} else {
  packageAllTask.reset();
  const packageJsTask = project.tasks.tryFind('package:js');
  if (packageJsTask) {
    packageAllTask.spawn(packageJsTask);
  }
  const packagePythonTask = project.tasks.tryFind('package:python');
  if (packagePythonTask) {
    packageAllTask.spawn(packagePythonTask);
  }
  console.log('Restricted package-all task to js/python targets.');
}

['package:java', 'package:dotnet', 'package:go'].forEach(taskName => {
  const removed = project.removeTask(taskName);
  if (removed) {
    console.log(`Removed task: ${taskName}`);
  }
});

// CdktfProviderProject already includes the necessary workflows

project.synth();
