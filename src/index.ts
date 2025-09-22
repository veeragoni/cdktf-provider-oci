// This package provides CDKTF bindings for Oracle Cloud Infrastructure (OCI)
//
// Due to the size of the OCI provider, the bindings need to be generated locally.
// Please see the README for instructions on how to generate and use the OCI provider bindings.
//
// Example usage after generating bindings:
// import { OciProvider } from './.gen/providers/oci/provider';
// import { CoreInstance } from './.gen/providers/oci/core-instance';

export interface OciProviderConfig {
  readonly region: string;
  readonly tenancyOcid: string;
  readonly userOcid: string;
  readonly fingerprint: string;
  readonly privateKey: string;
}

// Helper class to provide guidance
export class OciProviderHelper {
  static setupInstructions(): string {
    return `
To use the OCI provider with CDKTF:

1. Add to your cdktf.json:
   {
     "terraformProviders": ["oracle/oci@~> 7.19"]
   }

2. Run: cdktf get

3. Import from generated bindings:
   import { OciProvider } from './.gen/providers/oci/provider';
   import { CoreInstance } from './.gen/providers/oci/core-instance';

See https://github.com/veeragoni/cdktf-provider-oci for full documentation.
`;
  }
}