# CDKTF OCI Provider Bindings

Generate and use Oracle Cloud Infrastructure (OCI) resources with the Cloud Development Kit for Terraform (CDKTF).

> **Note**: Due to the size of the OCI provider (thousands of resources), bindings are generated locally in your project rather than distributed as a package.

## Installation

### Step 1: Set up your CDKTF project

If you haven't already, create a new CDKTF project:

```bash
npm install -g cdktf-cli
cdktf init --template typescript --local
```

### Step 2: Configure the OCI provider

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

### Step 3: Generate the provider bindings

```bash
cdktf get
```

This creates a `.gen/providers/oci/` directory with TypeScript bindings for all OCI resources.

## Usage

### TypeScript
```typescript
import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { OciProvider } from './.gen/providers/oci/provider';
import { CoreVcn } from './.gen/providers/oci/core-vcn';
import { CoreSubnet } from './.gen/providers/oci/core-subnet';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // Configure OCI Provider
    new OciProvider(this, 'oci', {
      region: 'us-ashburn-1',
      tenancyOcid: process.env.OCI_TENANCY_OCID!,
      userOcid: process.env.OCI_USER_OCID!,
      fingerprint: process.env.OCI_FINGERPRINT!,
      privateKey: process.env.OCI_PRIVATE_KEY!,
    });

    // Create a VCN
    const vcn = new CoreVcn(this, 'my-vcn', {
      compartmentId: process.env.OCI_COMPARTMENT_ID!,
      cidrBlock: '10.0.0.0/16',
      displayName: 'My VCN',
    });

    // Create a Subnet
    new CoreSubnet(this, 'my-subnet', {
      compartmentId: process.env.OCI_COMPARTMENT_ID!,
      vcnId: vcn.id,
      cidrBlock: '10.0.1.0/24',
      displayName: 'My Subnet',
    });
  }
}

const app = new App();
new MyStack(app, 'oci-stack');
app.synth();
```

### Python
```python
import os
from constructs import Construct
from cdktf import App, TerraformStack
from imports.oci.provider import OciProvider
from imports.oci.core_vcn import CoreVcn
from imports.oci.core_subnet import CoreSubnet

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        # Configure OCI Provider
        OciProvider(self, "oci",
            region="us-ashburn-1",
            tenancy_ocid=os.environ["OCI_TENANCY_OCID"],
            user_ocid=os.environ["OCI_USER_OCID"],
            fingerprint=os.environ["OCI_FINGERPRINT"],
            private_key=os.environ["OCI_PRIVATE_KEY"]
        )

        # Create a VCN
        vcn = CoreVcn(self, "my-vcn",
            compartment_id=os.environ["OCI_COMPARTMENT_ID"],
            cidr_block="10.0.0.0/16",
            display_name="My VCN"
        )

        # Create a Subnet
        CoreSubnet(self, "my-subnet",
            compartment_id=os.environ["OCI_COMPARTMENT_ID"],
            vcn_id=vcn.id,
            cidr_block="10.0.1.0/24",
            display_name="My Subnet"
        )

app = App()
MyStack(app, "oci-stack")
app.synth()
```



## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## How It Works

When you run `cdktf get`, the CDKTF CLI:
1. Downloads the OCI Terraform provider
2. Generates TypeScript/Python bindings for all resources
3. Places them in your project directory (`.gen/` or `imports/`)
4. Makes them available for import in your code

This gives you:
- ✅ Type-safe access to all OCI resources
- ✅ IntelliSense/autocomplete in your IDE
- ✅ The exact provider version you specify
- ✅ No large dependencies in node_modules

## Troubleshooting

### Common Import Patterns

```typescript
// TypeScript - Import from locally generated bindings
import { OciProvider } from './.gen/providers/oci/provider';
import { CoreInstance } from './.gen/providers/oci/core-instance';
```

```python
# Python - Import from locally generated bindings
from imports.oci.provider import OciProvider
from imports.oci.core_instance import CoreInstance
```

### Finding Resource Names

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

