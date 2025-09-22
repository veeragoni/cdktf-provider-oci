// https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/devops_repository_mirror_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDevopsRepositoryMirrorRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/devops_repository_mirror_record#id DataOciDevopsRepositoryMirrorRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/devops_repository_mirror_record#mirror_record_type DataOciDevopsRepositoryMirrorRecord#mirror_record_type}
  */
  readonly mirrorRecordType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/devops_repository_mirror_record#repository_id DataOciDevopsRepositoryMirrorRecord#repository_id}
  */
  readonly repositoryId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/devops_repository_mirror_record oci_devops_repository_mirror_record}
*/
export class DataOciDevopsRepositoryMirrorRecord extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_repository_mirror_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDevopsRepositoryMirrorRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDevopsRepositoryMirrorRecord to import
  * @param importFromId The id of the existing DataOciDevopsRepositoryMirrorRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/devops_repository_mirror_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDevopsRepositoryMirrorRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_repository_mirror_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/devops_repository_mirror_record oci_devops_repository_mirror_record} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDevopsRepositoryMirrorRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDevopsRepositoryMirrorRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_repository_mirror_record',
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
    this._mirrorRecordType = config.mirrorRecordType;
    this._repositoryId = config.repositoryId;
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

  // mirror_record_type - computed: false, optional: false, required: true
  private _mirrorRecordType?: string; 
  public get mirrorRecordType() {
    return this.getStringAttribute('mirror_record_type');
  }
  public set mirrorRecordType(value: string) {
    this._mirrorRecordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorRecordTypeInput() {
    return this._mirrorRecordType;
  }

  // mirror_status - computed: true, optional: false, required: false
  public get mirrorStatus() {
    return this.getStringAttribute('mirror_status');
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_enqueued - computed: true, optional: false, required: false
  public get timeEnqueued() {
    return this.getStringAttribute('time_enqueued');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
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
      id: cdktf.stringToTerraform(this._id),
      mirror_record_type: cdktf.stringToTerraform(this._mirrorRecordType),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
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
      mirror_record_type: {
        value: cdktf.stringToHclTerraform(this._mirrorRecordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
