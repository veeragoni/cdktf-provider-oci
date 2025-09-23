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

  publishToPypi: {
    distName: 'cdktf-provider-oci',
    module: 'cdktf_provider_oci',
  },

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

// Fix package.json after synthesis to use correct author and repository
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

  // Only keep Python and JavaScript targets in jsii
  packageJson.jsii.targets = {
    python: packageJson.jsii.targets.python
  };

  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');
};

project.addScripts({
  'check-if-new-provider-version': 'node scripts/check-for-upgrades.js',
  'fetch': 'npx projen fetch',
  'commit': 'git add -A && git commit -am "Update provider" || echo "No changes to commit"',
  'should-release': '! git diff --exit-code v$(cat version.json | jq -r \'.version\') ./src ./package.json',
  'prebump': 'yarn fetch && yarn compile && yarn run commit && yarn run should-release',
  'build-provider': 'yarn fetch && yarn compile && yarn docgen',
});

// CdktfProviderProject already includes the necessary workflows

project.synth();