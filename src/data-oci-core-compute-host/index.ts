// https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/core_compute_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreComputeHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/core_compute_host#compute_host_id DataOciCoreComputeHost#compute_host_id}
  */
  readonly computeHostId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/core_compute_host#id DataOciCoreComputeHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/core_compute_host oci_core_compute_host}
*/
export class DataOciCoreComputeHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_compute_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreComputeHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreComputeHost to import
  * @param importFromId The id of the existing DataOciCoreComputeHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/core_compute_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreComputeHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_compute_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/core_compute_host oci_core_compute_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreComputeHostConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreComputeHostConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_compute_host',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '6.37.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._computeHostId = config.computeHostId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_data - computed: true, optional: false, required: false
  public get additionalData() {
    return this.getStringAttribute('additional_data');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // capacity_reservation_id - computed: true, optional: false, required: false
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_host_id - computed: false, optional: false, required: true
  private _computeHostId?: string; 
  public get computeHostId() {
    return this.getStringAttribute('compute_host_id');
  }
  public set computeHostId(value: string) {
    this._computeHostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeHostIdInput() {
    return this._computeHostId;
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

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // gpu_memory_fabric_id - computed: true, optional: false, required: false
  public get gpuMemoryFabricId() {
    return this.getStringAttribute('gpu_memory_fabric_id');
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // hpc_island_id - computed: true, optional: false, required: false
  public get hpcIslandId() {
    return this.getStringAttribute('hpc_island_id');
  }

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

  // impacted_component_details - computed: true, optional: false, required: false
  public get impactedComponentDetails() {
    return this.getStringAttribute('impacted_component_details');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  private _lifecycleDetails = new cdktf.StringMap(this, "lifecycle_details");
  public get lifecycleDetails() {
    return this._lifecycleDetails;
  }

  // local_block_id - computed: true, optional: false, required: false
  public get localBlockId() {
    return this.getStringAttribute('local_block_id');
  }

  // network_block_id - computed: true, optional: false, required: false
  public get networkBlockId() {
    return this.getStringAttribute('network_block_id');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
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
      compute_host_id: cdktf.stringToTerraform(this._computeHostId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_host_id: {
        value: cdktf.stringToHclTerraform(this._computeHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
