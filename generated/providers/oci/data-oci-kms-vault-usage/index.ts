// https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/kms_vault_usage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciKmsVaultUsageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/kms_vault_usage#id DataOciKmsVaultUsage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/kms_vault_usage#vault_id DataOciKmsVaultUsage#vault_id}
  */
  readonly vaultId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/kms_vault_usage oci_kms_vault_usage}
*/
export class DataOciKmsVaultUsage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_kms_vault_usage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciKmsVaultUsage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciKmsVaultUsage to import
  * @param importFromId The id of the existing DataOciKmsVaultUsage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/kms_vault_usage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciKmsVaultUsage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_kms_vault_usage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/kms_vault_usage oci_kms_vault_usage} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciKmsVaultUsageConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciKmsVaultUsageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_vault_usage',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.19.0',
        providerVersionConstraint: '>=7.19.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._vaultId = config.vaultId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key_count - computed: true, optional: false, required: false
  public get keyCount() {
    return this.getNumberAttribute('key_count');
  }

  // key_version_count - computed: true, optional: false, required: false
  public get keyVersionCount() {
    return this.getNumberAttribute('key_version_count');
  }

  // software_key_count - computed: true, optional: false, required: false
  public get softwareKeyCount() {
    return this.getNumberAttribute('software_key_count');
  }

  // software_key_version_count - computed: true, optional: false, required: false
  public get softwareKeyVersionCount() {
    return this.getNumberAttribute('software_key_version_count');
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vault_id: cdktf.stringToTerraform(this._vaultId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
