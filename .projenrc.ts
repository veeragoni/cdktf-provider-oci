import { ConstructLibraryCdktf } from 'projen/lib/cdktf/index.js';
import { NpmAccess } from 'projen/lib/javascript';
import { GithubWorkflow } from 'projen/lib/github';
import { JobPermission } from 'projen/lib/github/workflows-model';

const project = new ConstructLibraryCdktf({
  defaultReleaseBranch: 'main',
  name: '@cdktf/provider-oci',
  description: 'CDKTF bindings for Oracle Cloud Infrastructure',
  repositoryUrl: 'https://github.com/veeragoni/cdktf-provider-oci.git',

  author: 'Suresh Veeragoni',
  authorAddress: 'github@veeragoni.com',
  npmAccess: NpmAccess.PUBLIC,
  releaseToNpm: true,

  cdktfVersion: '^0.20.0 || ^0.21.0',
  constructsVersion: '^10.0.0',
  jsiiVersion: '^5.0.0',

  deps: ['cdktf', 'constructs'],
  peerDeps: ['cdktf', 'constructs'],

  // Enable GitHub workflows
  github: true,
  githubOptions: {
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci'],
      },
    },
  },

  // Auto-approve and merge dependabot PRs
  autoApproveOptions: {
    allowedUsernames: ['dependabot[bot]'],
  },

  // Release configuration
  release: true,
  releaseWorkflow: true,
  majorVersion: 0,

  publishToPypi: {
    distName: 'cdktf-provider-oci',
    module: 'cdktf_provider_oci',
  },


  // Add package.json keywords for better discoverability
  keywords: [
    'cdk',
    'cdktf',
    'terraform',
    'oracle',
    'oci',
    'oracle-cloud',
    'oracle-cloud-infrastructure',
    'provider',
  ],

  // Gitignore configuration
  gitignore: [
    '*.log',
    '*.pid',
    '*.seed',
    '*.pid.lock',
    '.DS_Store',
    '*.swp',
    '*.swo',
    '*~',
    '.idea/',
    '.vscode/',
    '*.iml',
    '.history/',
    '.env',
    '.env.local',
    '.env.*.local',
    'terraform.tfstate',
    'terraform.tfstate.*',
    '.terraform/',
    '*.tfvars',
    'override.tf',
    'override.tf.json',
    '*_override.tf',
    '*_override.tf.json',
    '.terraformrc',
    'terraform.rc',
    'crash.log',
    'crash.*.log',
    '.gen/',
    'cdktf.out/',
    'cdktf.log',
    '.cdktf/',
    'imported/',
    'imports/',
    '!imports/*.ts',
    'cdk.out/',
    'cdk.context.json',
    'package-lock.json',
    'yarn-error.log',
    'lerna-debug.log*',
    '.npm/',
    '.yarn-integrity',
    '.cache/',
    '.parcel-cache/',
    '.next/',
    '.nuxt/',
    '.docusaurus/',
    '.serverless/',
    '.fusebox/',
    '.dynamodb/',
    '.tern-port',
    '.venv/',
    'venv/',
    'ENV/',
    'env.bak/',
    'venv.bak/',
    '__pycache__/',
    '*.py[cod]',
    '*$py.class',
    '*.so',
    '.Python',
    'pip-log.txt',
    'pip-delete-this-directory.txt',
    '.pytest_cache/',
    '.coverage',
    '.coverage.*',
    'htmlcov/',
    '.tox/',
    '*.cover',
    '.hypothesis/',
    '*.egg-info/',
    '.installed.cfg',
    '*.egg',
    'MANIFEST',
    'wheels/',
    'share/python-wheels/',
    'instance/',
    '.webassets-cache',
    '.scrapy',
    'target/',
    '.ipynb_checkpoints',
    '.python-version',
    '.mypy_cache/',
    '.dmypy.json',
    'dmypy.json',
    '.pyre/',
    '.pytype/',
  ],
});

// Add custom workflow to check for OCI provider updates
const checkProviderUpdates = new GithubWorkflow(project.github!, 'check-provider-updates');
checkProviderUpdates.on({
  schedule: [{ cron: '0 0 * * *' }], // Run daily at midnight UTC
  workflowDispatch: {}, // Allow manual trigger
});

checkProviderUpdates.addJob('check-updates', {
  runsOn: ['ubuntu-latest'],
  permissions: {
    contents: JobPermission.WRITE,
    pullRequests: JobPermission.WRITE,
  },
  steps: [
    {
      name: 'Checkout',
      uses: 'actions/checkout@v4',
    },
    {
      name: 'Setup Node.js',
      uses: 'actions/setup-node@v4',
      with: {
        'node-version': '18',
      },
    },
    {
      name: 'Install dependencies',
      run: 'yarn install --frozen-lockfile',
    },
    {
      name: 'Check for OCI Provider updates',
      id: 'check',
      run: `
        # Get current version from package.json or provider config
        CURRENT_VERSION=$(grep -oP '"terraformProvider":\\s*"oracle/oci@~>\\s*\\K[0-9]+\\.[0-9]+' .projenrc.ts || echo "6.0")

        # Get latest OCI provider version from Terraform Registry
        LATEST_VERSION=$(curl -s https://registry.terraform.io/v1/providers/oracle/oci | jq -r '.version' | cut -d. -f1,2)

        echo "Current version: $CURRENT_VERSION"
        echo "Latest version: $LATEST_VERSION"

        if [ "$CURRENT_VERSION" != "$LATEST_VERSION" ]; then
          echo "update_needed=true" >> $GITHUB_OUTPUT
          echo "latest_version=$LATEST_VERSION" >> $GITHUB_OUTPUT
        else
          echo "update_needed=false" >> $GITHUB_OUTPUT
        fi
      `,
    },
    {
      name: 'Generate provider bindings',
      if: 'steps.check.outputs.update_needed == \'true\'',
      run: `
        # Update provider version in configuration
        LATEST_VERSION=\${{ steps.check.outputs.latest_version }}

        # Generate new provider bindings
        npx cdktf-cli@latest get --language typescript --provider "oracle/oci@~> $LATEST_VERSION"

        # Update .projenrc.ts with new version
        sed -i "s/oracle\\/oci@~>[^']*/oracle\\/oci@~> $LATEST_VERSION/" .projenrc.ts

        # Run projen to update project files
        npx projen
      `,
    },
    {
      name: 'Create Pull Request',
      if: 'steps.check.outputs.update_needed == \'true\'',
      uses: 'peter-evans/create-pull-request@v5',
      with: {
        token: '${{ secrets.GITHUB_TOKEN }}',
        'commit-message': 'chore: update OCI provider to v${{ steps.check.outputs.latest_version }}',
        title: 'chore: update OCI provider to v${{ steps.check.outputs.latest_version }}',
        body: `This PR updates the OCI Terraform provider to version \${{ steps.check.outputs.latest_version }}.

## Changes
- Updated provider bindings to oracle/oci@~> \${{ steps.check.outputs.latest_version }}
- Regenerated TypeScript bindings
- Updated dependencies

## Release Notes
Check the [OCI Provider Release Notes](https://github.com/oracle/terraform-provider-oci/releases) for details.

---
*This PR was automatically created by the check-provider-updates workflow.*`,
        branch: 'update-oci-provider-${{ steps.check.outputs.latest_version }}',
        'delete-branch': true,
        labels: 'dependencies,automated',
      },
    },
  ],
});

// Add workflow to generate provider bindings
const generateBindings = new GithubWorkflow(project.github!, 'generate-bindings');
generateBindings.on({
  push: {
    branches: ['main'],
    paths: ['.projenrc.ts', 'provider-config.json'],
  },
  workflowDispatch: {
    inputs: {
      providerVersion: {
        description: 'OCI Provider version (e.g., 6.0)',
        required: false,
        type: 'string',
      },
    },
  },
});

generateBindings.addJob('generate', {
  runsOn: ['ubuntu-latest'],
  permissions: {
    contents: JobPermission.READ,
  },
  steps: [
    {
      name: 'Checkout',
      uses: 'actions/checkout@v4',
    },
    {
      name: 'Setup Node.js',
      uses: 'actions/setup-node@v4',
      with: {
        'node-version': '18',
      },
    },
    {
      name: 'Setup Python',
      uses: 'actions/setup-python@v5',
      with: {
        'python-version': '3.11',
      },
    },
    {
      name: 'Install dependencies',
      run: 'yarn install --frozen-lockfile',
    },
    {
      name: 'Generate provider bindings',
      run: `
        if [ -n "\${{ github.event.inputs.providerVersion }}" ]; then
          PROVIDER_VERSION="\${{ github.event.inputs.providerVersion }}"
        else
          PROVIDER_VERSION=$(grep -oP '"terraformProvider":\\s*"oracle/oci@~>\\s*\\K[0-9]+\\.[0-9]+' .projenrc.ts || echo "6.0")
        fi

        echo "Generating bindings for OCI provider version: \$PROVIDER_VERSION"
        npx cdktf-cli@latest get --language typescript --provider "oracle/oci@~> \$PROVIDER_VERSION"
      `,
    },
    {
      name: 'Build project',
      run: 'npx projen build',
    },
    {
      name: 'Upload artifacts',
      uses: 'actions/upload-artifact@v4',
      with: {
        name: 'provider-bindings',
        path: 'lib/\ndist/\n.gen/'
      },
    },
  ],
});

project.synth();
