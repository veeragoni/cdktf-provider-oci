// https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsFleetPerformanceTuningAnalysisResultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#fleet_id DataOciJmsFleetPerformanceTuningAnalysisResult#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#id DataOciJmsFleetPerformanceTuningAnalysisResult#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#performance_tuning_analysis_result_id DataOciJmsFleetPerformanceTuningAnalysisResult#performance_tuning_analysis_result_id}
  */
  readonly performanceTuningAnalysisResultId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result oci_jms_fleet_performance_tuning_analysis_result}
*/
export class DataOciJmsFleetPerformanceTuningAnalysisResult extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_fleet_performance_tuning_analysis_result";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsFleetPerformanceTuningAnalysisResult resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsFleetPerformanceTuningAnalysisResult to import
  * @param importFromId The id of the existing DataOciJmsFleetPerformanceTuningAnalysisResult that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsFleetPerformanceTuningAnalysisResult to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_fleet_performance_tuning_analysis_result", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result oci_jms_fleet_performance_tuning_analysis_result} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsFleetPerformanceTuningAnalysisResultConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsFleetPerformanceTuningAnalysisResultConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_fleet_performance_tuning_analysis_result',
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
    this._fleetId = config.fleetId;
    this._id = config.id;
    this._performanceTuningAnalysisResultId = config.performanceTuningAnalysisResultId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_installation_id - computed: true, optional: false, required: false
  public get applicationInstallationId() {
    return this.getStringAttribute('application_installation_id');
  }

  // application_installation_path - computed: true, optional: false, required: false
  public get applicationInstallationPath() {
    return this.getStringAttribute('application_installation_path');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
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

  // managed_instance_id - computed: true, optional: false, required: false
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // performance_tuning_analysis_result_id - computed: false, optional: false, required: true
  private _performanceTuningAnalysisResultId?: string; 
  public get performanceTuningAnalysisResultId() {
    return this.getStringAttribute('performance_tuning_analysis_result_id');
  }
  public set performanceTuningAnalysisResultId(value: string) {
    this._performanceTuningAnalysisResultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceTuningAnalysisResultIdInput() {
    return this._performanceTuningAnalysisResultId;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // warning_count - computed: true, optional: false, required: false
  public get warningCount() {
    return this.getNumberAttribute('warning_count');
  }

  // work_request_id - computed: true, optional: false, required: false
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      id: cdktf.stringToTerraform(this._id),
      performance_tuning_analysis_result_id: cdktf.stringToTerraform(this._performanceTuningAnalysisResultId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fleet_id: {
        value: cdktf.stringToHclTerraform(this._fleetId),
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
      performance_tuning_analysis_result_id: {
        value: cdktf.stringToHclTerraform(this._performanceTuningAnalysisResultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
