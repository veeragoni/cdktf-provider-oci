// https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/opsi_operations_insights_warehouse
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiOperationsInsightsWarehouseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/opsi_operations_insights_warehouse#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouse#operations_insights_warehouse_id}
  */
  readonly operationsInsightsWarehouseId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/opsi_operations_insights_warehouse oci_opsi_operations_insights_warehouse}
*/
export class DataOciOpsiOperationsInsightsWarehouse extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_operations_insights_warehouse";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpsiOperationsInsightsWarehouse to import
  * @param importFromId The id of the existing DataOciOpsiOperationsInsightsWarehouse that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/opsi_operations_insights_warehouse#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpsiOperationsInsightsWarehouse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_operations_insights_warehouse", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/opsi_operations_insights_warehouse oci_opsi_operations_insights_warehouse} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiOperationsInsightsWarehouseConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiOperationsInsightsWarehouseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_operations_insights_warehouse',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.19.0',
        providerVersionConstraint: '~> 7.19.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._operationsInsightsWarehouseId = config.operationsInsightsWarehouseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_model - computed: true, optional: false, required: false
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }

  // cpu_allocated - computed: true, optional: false, required: false
  public get cpuAllocated() {
    return this.getNumberAttribute('cpu_allocated');
  }

  // cpu_used - computed: true, optional: false, required: false
  public get cpuUsed() {
    return this.getNumberAttribute('cpu_used');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dynamic_group_id - computed: true, optional: false, required: false
  public get dynamicGroupId() {
    return this.getStringAttribute('dynamic_group_id');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // operations_insights_tenancy_id - computed: true, optional: false, required: false
  public get operationsInsightsTenancyId() {
    return this.getStringAttribute('operations_insights_tenancy_id');
  }

  // operations_insights_warehouse_id - computed: false, optional: false, required: true
  private _operationsInsightsWarehouseId?: string; 
  public get operationsInsightsWarehouseId() {
    return this.getStringAttribute('operations_insights_warehouse_id');
  }
  public set operationsInsightsWarehouseId(value: string) {
    this._operationsInsightsWarehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInsightsWarehouseIdInput() {
    return this._operationsInsightsWarehouseId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_allocated_in_gbs - computed: true, optional: false, required: false
  public get storageAllocatedInGbs() {
    return this.getNumberAttribute('storage_allocated_in_gbs');
  }

  // storage_used_in_gbs - computed: true, optional: false, required: false
  public get storageUsedInGbs() {
    return this.getNumberAttribute('storage_used_in_gbs');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_wallet_rotated - computed: true, optional: false, required: false
  public get timeLastWalletRotated() {
    return this.getStringAttribute('time_last_wallet_rotated');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      operations_insights_warehouse_id: cdktf.stringToTerraform(this._operationsInsightsWarehouseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      operations_insights_warehouse_id: {
        value: cdktf.stringToHclTerraform(this._operationsInsightsWarehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
