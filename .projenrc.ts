import { CdktfProviderProject } from '@cdktf/provider-project';

const project = new CdktfProviderProject({
  author: 'Suresh Veeragoni',
  authorAddress: 'github@veeragoni.com',
  defaultReleaseBranch: 'main',
  name: '@veeragoni/cdktf-provider-oci',
  repositoryUrl: 'https://github.com/veeragoni/cdktf-provider-oci.git',
  description: 'Prebuilt Terraform CDK (cdktf) provider for Oracle Cloud Infrastructure (OCI)',

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
    'cdk',
    'cdktf',
    'terraform',
    'terraform-cdk',
    'oracle',
    'oci',
    'oracle-cloud',
    'oracle-cloud-infrastructure',
    'provider',
    'pre-built-provider'
  ],

  devDeps: ['@cdktf/provider-project@^0.7.0'],
  isDeprecated: false,

  // Ensure generated files are ignored
  gitignore: [
    'generated/',
  ],
});

project.synth();