# CDKTF Provider for Oracle Cloud Infrastructure (OCI)

This package provides setup instructions and helper utilities for using Oracle Cloud Infrastructure with CDKTF (Cloud Development Kit for Terraform).

> **Important**: Due to the size of the OCI provider (thousands of resources), the actual provider bindings must be generated locally in your project. This package provides guidance and utilities to help you set this up.

## Installation

### TypeScript/JavaScript
```bash
npm install cdktf-provider-oci
# or
yarn add cdktf-provider-oci
```

### Python
```bash
pip install cdktf-provider-oci
```

## Setup

### Step 1: Configure your CDKTF project

Add the OCI provider to your `cdktf.json`:

```json
{
  "language": "typescript",
  "app": "npx ts-node main.ts",
  "terraformProviders": [
    "oracle/oci@~> 7.19"
  ]
}
```

### Step 2: Generate the OCI provider bindings

Run the following command in your project:

```bash
cdktf get
```

This will generate the OCI provider bindings in:
- TypeScript: `.gen/providers/oci/` directory
- Python: `imports/oci/` directory

## Usage Examples

### TypeScript

```typescript
import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
// Import from locally generated bindings:
import { OciProvider } from './.gen/providers/oci/provider';
import { CoreInstance } from './.gen/providers/oci/core-instance';
import { CoreVcn } from './.gen/providers/oci/core-vcn';
import { CoreSubnet } from './.gen/providers/oci/core-subnet';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new OciProvider(this, 'oci', {
      region: 'us-ashburn-1',
      tenancyOcid: process.env.OCI_TENANCY_OCID || '',
      userOcid: process.env.OCI_USER_OCID || '',
      fingerprint: process.env.OCI_FINGERPRINT || '',
      privateKey: process.env.OCI_PRIVATE_KEY || '',
    });

    // Create a VCN
    const vcn = new CoreVcn(this, 'example-vcn', {
      compartmentId: process.env.OCI_COMPARTMENT_ID || '',
      cidrBlock: '10.0.0.0/16',
      displayName: 'example-vcn',
      dnsLabel: 'examplevcn',
    });

    // Create a Subnet
    const subnet = new CoreSubnet(this, 'example-subnet', {
      compartmentId: process.env.OCI_COMPARTMENT_ID || '',
      vcnId: vcn.id,
      cidrBlock: '10.0.1.0/24',
      displayName: 'example-subnet',
      dnsLabel: 'examplesubnet',
      availabilityDomain: 'AD-1',
    });

    // Create an Instance
    new CoreInstance(this, 'example-instance', {
      availabilityDomain: 'AD-1',
      compartmentId: process.env.OCI_COMPARTMENT_ID || '',
      shape: 'VM.Standard.E2.1.Micro',
      shapeConfig: {
        ocpus: 1,
        memoryInGbs: 1,
      },
      createVnicDetails: {
        subnetId: subnet.id,
        assignPublicIp: 'true',
      },
      sourceDetails: {
        sourceType: 'image',
        sourceId: 'ocid1.image.oc1.iad.xxxxxx', // Replace with actual image OCID
      },
      displayName: 'example-instance',
    });
  }
}

const app = new App();
new MyStack(app, 'oci-example');
app.synth();
```

### Python

```python
import os
from constructs import Construct
from cdktf import App, TerraformStack
# Import from locally generated bindings:
from imports.oci.provider import OciProvider
from imports.oci.core_instance import CoreInstance
from imports.oci.core_vcn import CoreVcn
from imports.oci.core_subnet import CoreSubnet

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        # Configure OCI Provider
        OciProvider(self, "oci",
            region="us-ashburn-1",
            tenancy_ocid=os.environ.get("OCI_TENANCY_OCID", ""),
            user_ocid=os.environ.get("OCI_USER_OCID", ""),
            fingerprint=os.environ.get("OCI_FINGERPRINT", ""),
            private_key=os.environ.get("OCI_PRIVATE_KEY", "")
        )

        # Create a VCN
        vcn = CoreVcn(self, "example-vcn",
            compartment_id=os.environ.get("OCI_COMPARTMENT_ID", ""),
            cidr_block="10.0.0.0/16",
            display_name="example-vcn",
            dns_label="examplevcn"
        )

        # Create a Subnet
        subnet = CoreSubnet(self, "example-subnet",
            compartment_id=os.environ.get("OCI_COMPARTMENT_ID", ""),
            vcn_id=vcn.id,
            cidr_block="10.0.1.0/24",
            display_name="example-subnet",
            dns_label="examplesubnet",
            availability_domain="AD-1"
        )

        # Create an Instance
        CoreInstance(self, "example-instance",
            availability_domain="AD-1",
            compartment_id=os.environ.get("OCI_COMPARTMENT_ID", ""),
            shape="VM.Standard.E2.1.Micro",
            shape_config={
                "ocpus": 1,
                "memory_in_gbs": 1
            },
            create_vnic_details={
                "subnet_id": subnet.id,
                "assign_public_ip": "true"
            },
            source_details={
                "source_type": "image",
                "source_id": "ocid1.image.oc1.iad.xxxxxx"  # Replace with actual image OCID
            },
            display_name="example-instance"
        )

app = App()
MyStack(app, "oci-example")
app.synth()
```

## Running Your CDKTF Application

Once you've set up your stack:

```bash
# Generate Terraform configuration
cdktf synth

# Deploy to OCI
cdktf deploy

# Destroy resources when done
cdktf destroy
```

## Why Local Generation?

The OCI Terraform provider contains thousands of resources and data sources. To avoid package size limitations and compilation issues, the bindings are generated locally in your project. This ensures:
- ✅ No npm package size limitations
- ✅ Faster installation
- ✅ Always up-to-date with your specified OCI provider version
- ✅ No memory issues during compilation

## Finding Resource Names

After running `cdktf get`, you can find all available resources in:
- TypeScript: `.gen/providers/oci/` directory
- Python: `imports/oci/` directory

Resource naming convention:
- Terraform resource `oci_core_instance` becomes `CoreInstance`
- Terraform resource `oci_identity_compartment` becomes `IdentityCompartment`
- Data sources follow the same pattern with `Data` prefix: `DataOciCoreInstances`

## Resources

- [OCI Terraform Provider Documentation](https://registry.terraform.io/providers/oracle/oci/latest/docs)
- [CDKTF Documentation](https://developer.hashicorp.com/terraform/cdktf)
- [Oracle Cloud Infrastructure Documentation](https://docs.oracle.com/iaas/Content/home.htm)

## Support

For issues and questions:
- [GitHub Issues](https://github.com/veeragoni/cdktf-provider-oci/issues)
- [OCI Provider Documentation](https://registry.terraform.io/providers/oracle/oci/latest/docs)

## License

Apache-2.0