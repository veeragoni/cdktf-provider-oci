
# CDKTF prebuilt bindings for oracle/oci provider version 7.19.0

This repo builds and publishes the [Terraform oci provider](https://registry.terraform.io/providers/oracle/oci/7.19.0/docs) bindings for [CDK for Terraform](https://cdk.tf).

## Available Packages

### npm

The npm package is published from this repository under [https://www.npmjs.com/package/cdktf-provider-oci](https://www.npmjs.com/package/cdktf-provider-oci) (owner: sureshveeragoni).

`npm install cdktf-provider-oci`

### PyPI

The PyPI package is published under [https://pypi.org/project/cdktf-provider-oci](https://pypi.org/project/cdktf-provider-oci/) (owner: sureshveeragoni).

`pip install cdktf-provider-oci`

## Docs

API references for TypeScript and Python are generated as part of the release workflow and published alongside the npm and PyPI artifacts. You can also run `yarn docgen` locally to produce the latest markdown documentation under `dist/`.

## Versioning

This project is explicitly not tracking the Terraform oci provider version 1:1. In fact, it always tracks `latest` of `~> 7.19.0` with every release. If there are scenarios where you explicitly have to pin your provider version, you can do so by [generating the provider constructs manually](https://cdk.tf/imports).

These are the upstream dependencies:

- [CDK for Terraform](https://cdk.tf)
- [Terraform oci provider](https://registry.terraform.io/providers/oracle/oci/7.19.0)
- [Terraform Engine](https://terraform.io)

If there are breaking changes (backward incompatible) in any of the above, the major version of this project will be bumped.

## Features / Issues / Bugs

Please report bugs and issues to the [CDK for Terraform](https://cdk.tf) project:

- [Create bug report](https://cdk.tf/bug)
- [Create feature request](https://cdk.tf/feature)

## Contributing

### Projen

This is mostly based on [Projen](https://github.com/projen/projen), which takes care of generating the entire repository.

### cdktf-provider-project based on Projen

There's a custom [project builder](https://github.com/cdktf/cdktf-provider-project) which encapsulate the common settings for all `cdktf` prebuilt providers.

### Provider Version

The provider version can be adjusted in [./.projenrc.js](./.projenrc.js).

### Repository Management

The repository is managed by [CDKTF Repository Manager](https://github.com/cdktf/cdktf-repository-manager/).
