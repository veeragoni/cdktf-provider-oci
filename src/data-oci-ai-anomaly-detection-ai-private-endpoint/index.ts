// https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAiAnomalyDetectionAiPrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoint#ai_private_endpoint_id DataOciAiAnomalyDetectionAiPrivateEndpoint#ai_private_endpoint_id}
  */
  readonly aiPrivateEndpointId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoint oci_ai_anomaly_detection_ai_private_endpoint}
*/
export class DataOciAiAnomalyDetectionAiPrivateEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_anomaly_detection_ai_private_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciAiAnomalyDetectionAiPrivateEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciAiAnomalyDetectionAiPrivateEndpoint to import
  * @param importFromId The id of the existing DataOciAiAnomalyDetectionAiPrivateEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciAiAnomalyDetectionAiPrivateEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_anomaly_detection_ai_private_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoint oci_ai_anomaly_detection_ai_private_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAiAnomalyDetectionAiPrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAiAnomalyDetectionAiPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ai_anomaly_detection_ai_private_endpoint',
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
    this._aiPrivateEndpointId = config.aiPrivateEndpointId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ai_private_endpoint_id - computed: false, optional: false, required: true
  private _aiPrivateEndpointId?: string; 
  public get aiPrivateEndpointId() {
    return this.getStringAttribute('ai_private_endpoint_id');
  }
  public set aiPrivateEndpointId(value: string) {
    this._aiPrivateEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aiPrivateEndpointIdInput() {
    return this._aiPrivateEndpointId;
  }

  // attached_data_assets - computed: true, optional: false, required: false
  public get attachedDataAssets() {
    return this.getListAttribute('attached_data_assets');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // dns_zones - computed: true, optional: false, required: false
  public get dnsZones() {
    return this.getListAttribute('dns_zones');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
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

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ai_private_endpoint_id: cdktf.stringToTerraform(this._aiPrivateEndpointId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ai_private_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._aiPrivateEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
