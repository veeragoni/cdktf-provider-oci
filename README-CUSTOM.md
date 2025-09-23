# CDKTF Provider for Oracle Cloud Infrastructure (OCI)

[![npm version](https://badge.fury.io/js/cdktf-provider-oci.svg)](https://www.npmjs.com/package/cdktf-provider-oci)
[![PyPI version](https://badge.fury.io/py/cdktf-provider-oci.svg)](https://pypi.org/project/cdktf-provider-oci/)

This repository contains prebuilt [Terraform OCI Provider](https://registry.terraform.io/providers/oracle/oci/7.19.0/docs) bindings for [CDK for Terraform](https://cdk.tf) (CDKTF).

## About

The `cdktf-provider-oci` package provides TypeScript/JavaScript and Python bindings for the Oracle Cloud Infrastructure Terraform Provider, enabling you to manage OCI resources using CDKTF with type safety and IDE support.

## Features

- **Complete OCI Coverage**: Access to all OCI resources and data sources available in the Terraform OCI Provider
- **Type Safety**: Full TypeScript/Python type definitions for all resources
- **IDE Support**: IntelliSense and autocomplete for resource properties
- **CDKTF Integration**: Seamlessly works with CDK for Terraform constructs and workflows

## Prerequisites

Before using this provider, ensure you have:

1. **OCI Account**: An active Oracle Cloud Infrastructure account
2. **OCI CLI Configuration**: Properly configured OCI CLI with credentials (`~/.oci/config`)
3. **Node.js/Python**: Node.js 20.x+ for TypeScript/JavaScript or Python 3.8+ for Python
4. **Terraform**: Terraform v1.0+ installed
5. **CDKTF CLI**: Install with `npm install -g cdktf-cli`

## Available Packages

### npm

Published from this repository at [https://www.npmjs.com/package/cdktf-provider-oci](https://www.npmjs.com/package/cdktf-provider-oci).

`npm install cdktf-provider-oci`

### PyPI

Published at [https://pypi.org/project/cdktf-provider-oci](https://pypi.org/project/cdktf-provider-oci/).

`pip install cdktf-provider-oci`

## Configuration

### Authentication

The OCI provider supports multiple authentication methods:

#### 1. API Key Authentication (Default)

```typescript
new OciProvider(this, 'oci', {
  region: 'us-ashburn-1',
  // Uses ~/.oci/config by default
});
```

#### 2. Instance Principal Authentication

```typescript
new OciProvider(this, 'oci', {
  region: 'us-ashburn-1',
  auth: 'InstancePrincipal',
});
```

#### 3. Resource Principal Authentication

```typescript
new OciProvider(this, 'oci', {
  region: 'us-ashburn-1',
  auth: 'ResourcePrincipal',
});
```

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

## Complete Example Project

For a complete working example of using this provider, check out the [cdktf-oci-example](https://github.com/veeragoni/cdktf-oci-example) repository, which demonstrates:

- Setting up a VCN (Virtual Cloud Network)
- Creating compute instances
- Configuring security lists and route tables
- Managing storage resources
- And more OCI resource configurations

### Quick Start with Example Project

```bash
# Clone the example repository
git clone https://github.com/veeragoni/cdktf-oci-example.git
cd cdktf-oci-example

# Install dependencies
npm install

# Deploy to OCI
cdktf deploy
```

## Documentation

### Provider Documentation
- [Terraform OCI Provider Documentation](https://registry.terraform.io/providers/oracle/oci/latest/docs)
- [Oracle Cloud Infrastructure Documentation](https://docs.oracle.com/en-us/iaas/Content/home.htm)

### CDKTF Documentation
- [CDKTF Documentation](https://developer.hashicorp.com/terraform/cdktf)
- [CDKTF TypeScript Reference](https://developer.hashicorp.com/terraform/cdktf/api-reference/typescript)

### API Reference

Auto-generated API documentation for this provider is available in the `docs` folder of this repository:

- [TypeScript API Documentation](https://github.com/veeragoni/cdktf-provider-oci/tree/main/docs/API.typescript.md)
- [Python API Documentation](https://github.com/veeragoni/cdktf-provider-oci/tree/main/docs/API.python.md)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the Apache-2.0 License.

## Support

- For issues with this provider package, please open an issue in this repository
- For OCI-specific issues, refer to [Oracle Cloud Infrastructure Support](https://support.oracle.com/)
- For CDKTF issues, see [CDKTF GitHub](https://github.com/hashicorp/terraform-cdk)

## Versioning

This project is explicitly not tracking the Terraform oci provider version 1:1. In fact, it always tracks `latest` of `~> 7.19.0` with every release. If there are scenarios where you explicitly have to pin your provider version, you can do so by [generating the provider constructs manually](https://cdk.tf/imports).

These are the upstream dependencies:

- [CDK for Terraform](https://cdk.tf)
- [Terraform oci provider](https://registry.terraform.io/providers/oracle/oci/7.19.0)
- [Terraform Engine](https://terraform.io)

If there are breaking changes (backward incompatible) in any of the above, the major version of this project will be bumped.

### Provider Version

The provider version can be adjusted in [./.projenrc.js](./.projenrc.js).