// https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/wlms_managed_instance_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciWlmsManagedInstanceServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/wlms_managed_instance_server#id DataOciWlmsManagedInstanceServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/wlms_managed_instance_server#managed_instance_id DataOciWlmsManagedInstanceServer#managed_instance_id}
  */
  readonly managedInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/wlms_managed_instance_server#server_id DataOciWlmsManagedInstanceServer#server_id}
  */
  readonly serverId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/wlms_managed_instance_server oci_wlms_managed_instance_server}
*/
export class DataOciWlmsManagedInstanceServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_wlms_managed_instance_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciWlmsManagedInstanceServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciWlmsManagedInstanceServer to import
  * @param importFromId The id of the existing DataOciWlmsManagedInstanceServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/wlms_managed_instance_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciWlmsManagedInstanceServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_wlms_managed_instance_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/wlms_managed_instance_server oci_wlms_managed_instance_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciWlmsManagedInstanceServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciWlmsManagedInstanceServerConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_wlms_managed_instance_server',
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
    this._managedInstanceId = config.managedInstanceId;
    this._serverId = config.serverId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_admin - computed: true, optional: false, required: false
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }

  // jdk_path - computed: true, optional: false, required: false
  public get jdkPath() {
    return this.getStringAttribute('jdk_path');
  }

  // jdk_version - computed: true, optional: false, required: false
  public get jdkVersion() {
    return this.getStringAttribute('jdk_version');
  }

  // latest_patches_status - computed: true, optional: false, required: false
  public get latestPatchesStatus() {
    return this.getStringAttribute('latest_patches_status');
  }

  // managed_instance_id - computed: false, optional: false, required: true
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // middleware_path - computed: true, optional: false, required: false
  public get middlewarePath() {
    return this.getStringAttribute('middleware_path');
  }

  // middleware_type - computed: true, optional: false, required: false
  public get middlewareType() {
    return this.getStringAttribute('middleware_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // patch_readiness_status - computed: true, optional: false, required: false
  public get patchReadinessStatus() {
    return this.getStringAttribute('patch_readiness_status');
  }

  // restart_order - computed: true, optional: false, required: false
  public get restartOrder() {
    return this.getNumberAttribute('restart_order');
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // weblogic_version - computed: true, optional: false, required: false
  public get weblogicVersion() {
    return this.getStringAttribute('weblogic_version');
  }

  // wls_domain_id - computed: true, optional: false, required: false
  public get wlsDomainId() {
    return this.getStringAttribute('wls_domain_id');
  }

  // wls_domain_name - computed: true, optional: false, required: false
  public get wlsDomainName() {
    return this.getStringAttribute('wls_domain_name');
  }

  // wls_domain_path - computed: true, optional: false, required: false
  public get wlsDomainPath() {
    return this.getStringAttribute('wls_domain_path');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      server_id: cdktf.stringToTerraform(this._serverId),
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
      managed_instance_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
