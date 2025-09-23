// https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#id OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#managed_instance_id OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#managed_instance_id}
  */
  readonly managedInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#windows_update_name OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#windows_update_name}
  */
  readonly windowsUpdateName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#windows_update_types}
  */
  readonly windowsUpdateTypes?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#timeouts OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#timeouts}
  */
  readonly timeouts?: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts;
  /**
  * work_request_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#work_request_details OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#work_request_details}
  */
  readonly workRequestDetails?: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails;
}
export interface OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#create OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#delete OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#update OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#update}
  */
  readonly update?: string;
}

export function osManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsToTerraform(struct?: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function osManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsToHclTerraform(struct?: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#description OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#display_name OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#display_name}
  */
  readonly displayName?: string;
}

export function osManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsToTerraform(struct?: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference | OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function osManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsToHclTerraform(struct?: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference | OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management oci_os_management_hub_managed_instance_install_windows_updates_management}
*/
export class OsManagementHubManagedInstanceInstallWindowsUpdatesManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_managed_instance_install_windows_updates_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsManagementHubManagedInstanceInstallWindowsUpdatesManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsManagementHubManagedInstanceInstallWindowsUpdatesManagement to import
  * @param importFromId The id of the existing OsManagementHubManagedInstanceInstallWindowsUpdatesManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsManagementHubManagedInstanceInstallWindowsUpdatesManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_managed_instance_install_windows_updates_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management oci_os_management_hub_managed_instance_install_windows_updates_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig
  */
  public constructor(scope: Construct, id: string, config: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_managed_instance_install_windows_updates_management',
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
    this._id = config.id;
    this._managedInstanceId = config.managedInstanceId;
    this._windowsUpdateName = config.windowsUpdateName;
    this._windowsUpdateTypes = config.windowsUpdateTypes;
    this._timeouts.internalValue = config.timeouts;
    this._workRequestDetails.internalValue = config.workRequestDetails;
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

  // windows_update_name - computed: false, optional: true, required: false
  private _windowsUpdateName?: string[]; 
  public get windowsUpdateName() {
    return this.getListAttribute('windows_update_name');
  }
  public set windowsUpdateName(value: string[]) {
    this._windowsUpdateName = value;
  }
  public resetWindowsUpdateName() {
    this._windowsUpdateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsUpdateNameInput() {
    return this._windowsUpdateName;
  }

  // windows_update_types - computed: false, optional: true, required: false
  private _windowsUpdateTypes?: string[]; 
  public get windowsUpdateTypes() {
    return this.getListAttribute('windows_update_types');
  }
  public set windowsUpdateTypes(value: string[]) {
    this._windowsUpdateTypes = value;
  }
  public resetWindowsUpdateTypes() {
    this._windowsUpdateTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsUpdateTypesInput() {
    return this._windowsUpdateTypes;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // work_request_details - computed: false, optional: true, required: false
  private _workRequestDetails = new OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference(this, "work_request_details");
  public get workRequestDetails() {
    return this._workRequestDetails;
  }
  public putWorkRequestDetails(value: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails) {
    this._workRequestDetails.internalValue = value;
  }
  public resetWorkRequestDetails() {
    this._workRequestDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workRequestDetailsInput() {
    return this._workRequestDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      windows_update_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._windowsUpdateName),
      windows_update_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._windowsUpdateTypes),
      timeouts: osManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsToTerraform(this._timeouts.internalValue),
      work_request_details: osManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsToTerraform(this._workRequestDetails.internalValue),
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
      windows_update_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._windowsUpdateName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      windows_update_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._windowsUpdateTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: osManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts",
      },
      work_request_details: {
        value: osManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsToHclTerraform(this._workRequestDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
