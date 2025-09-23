
# CDKTF prebuilt bindings for oracle/oci provider version 7.19.0

This repo builds and publishes the [Terraform oci provider](https://registry.terraform.io/providers/oracle/oci/7.19.0/docs) bindings for [CDK for Terraform](https://cdk.tf).

## Available Packages

### npm

Published from this repository at [https://www.npmjs.com/package/cdktf-provider-oci](https://www.npmjs.com/package/cdktf-provider-oci) (owner: sureshveeragoni).

`npm install cdktf-provider-oci`

### PyPI

Published at [https://pypi.org/project/cdktf-provider-oci](https://pypi.org/project/cdktf-provider-oci/) (owner: sureshveeragoni).

`pip install cdktf-provider-oci`


## Usage

### TypeScript

```ts
import { App, TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { OciProvider } from 'cdktf-provider-oci/lib/provider';
import { CoreInstance } from 'cdktf-provider-oci/lib/core-instance';

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new OciProvider(this, 'oci', {
      region: 'us-ashburn-1',
    });

    new CoreInstance(this, 'example', {
      compartmentId: 'ocid1.compartment.oc1..exampleuniqueID',
      availabilityDomain: 'kIdk:US-ASHBURN-AD-1',
      shape: 'VM.Standard.E4.Flex',
      sourceDetails: {
        sourceType: 'image',
        imageId: 'ocid1.image.oc1..exampleuniqueID',
      },
      createVnicDetails: {
        subnetId: 'ocid1.subnet.oc1..exampleuniqueID',
      },
    });
  }
}

const app = new App();
new MyStack(app, 'oci-example');
app.synth();
```

Install dependencies with `npm install cdktf cdktf-provider-oci constructs` before synthesizing.

### Python

```python
from constructs import Construct
from cdktf import App, TerraformStack
from cdktf_provider_oci.provider import OciProvider
from cdktf_provider_oci.core_instance import CoreInstance


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, construct_id: str) -> None:
        super().__init__(scope, construct_id)

        OciProvider(self, "oci", region="us-ashburn-1")

        CoreInstance(self, "example",
            compartment_id="ocid1.compartment.oc1..exampleuniqueID",
            availability_domain="kIdk:US-ASHBURN-AD-1",
            shape="VM.Standard.E4.Flex",
            source_details={
                "source_type": "image",
                "image_id": "ocid1.image.oc1..exampleuniqueID",
            },
            create_vnic_details={
                "subnet_id": "ocid1.subnet.oc1..exampleuniqueID",
            },
        )


app = App()
MyStack(app, "oci-example")
app.synth()
```

Install dependencies with `pip install cdktf cdktf-provider-oci constructs` before synthesizing.

## Docs

Find auto-generated docs for this provider here: 

- [Typescript](./docs/API.typescript.md)
- [Python](./docs/API.python.md)
- [Java](./docs/API.java.md)
- [C#](./docs/API.csharp.md)
- [Go](./docs/API.go.md)

You can also visit a hosted version of the documentation on [constructs.dev](https://constructs.dev/packages/@cdktf/provider-oci).

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
