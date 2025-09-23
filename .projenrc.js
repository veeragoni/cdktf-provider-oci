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

  // Fix the release workflow to remove unwanted jobs
  const releaseWorkflowPath = '.github/workflows/release.yml';
  if (fs.existsSync(releaseWorkflowPath)) {
    // Make the file writable first
    const { execSync } = require('child_process');
    try {
      execSync(`chmod +w "${releaseWorkflowPath}"`, { stdio: 'ignore' });
    } catch {}

    let releaseContent = fs.readFileSync(releaseWorkflowPath, 'utf8');

    // Fix the deprecate job to use correct package name
    releaseContent = releaseContent.replace(
      '@cdktf/provider-oci',
      'cdktf-provider-oci'
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
};

project.addScripts({
  'check-if-new-provider-version': 'node scripts/check-for-upgrades.js',
  'fetch': 'npx projen fetch',
  'commit': 'git add -A && git commit -am "Update provider" || echo "No changes to commit"',
  'should-release': 'node scripts/should-release.js',
  'prebump': 'yarn fetch && yarn compile && yarn run commit && yarn run should-release',
  'build-provider': 'yarn fetch && yarn compile && yarn docgen',
});

// CdktfProviderProject already includes the necessary workflows

project.synth();