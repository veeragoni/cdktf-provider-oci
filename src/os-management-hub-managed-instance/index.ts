// https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsManagementHubManagedInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance#description OsManagementHubManagedInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance#id OsManagementHubManagedInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance#managed_instance_id OsManagementHubManagedInstance#managed_instance_id}
  */
  readonly managedInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance#notification_topic_id OsManagementHubManagedInstance#notification_topic_id}
  */
  readonly notificationTopicId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance#primary_management_station_id OsManagementHubManagedInstance#primary_management_station_id}
  */
  readonly primaryManagementStationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance#secondary_management_station_id OsManagementHubManagedInstance#secondary_management_station_id}
  */
  readonly secondaryManagementStationId?: string;
  /**
  * autonomous_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance#autonomous_settings OsManagementHubManagedInstance#autonomous_settings}
  */
  readonly autonomousSettings?: OsManagementHubManagedInstanceAutonomousSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance#timeouts OsManagementHubManagedInstance#timeouts}
  */
  readonly timeouts?: OsManagementHubManagedInstanceTimeouts;
}
export interface OsManagementHubManagedInstanceLifecycleEnvironment {
}

export function osManagementHubManagedInstanceLifecycleEnvironmentToTerraform(struct?: OsManagementHubManagedInstanceLifecycleEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osManagementHubManagedInstanceLifecycleEnvironmentToHclTerraform(struct?: OsManagementHubManagedInstanceLifecycleEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OsManagementHubManagedInstanceLifecycleEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubManagedInstanceLifecycleEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class OsManagementHubManagedInstanceLifecycleEnvironmentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference {
    return new OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubManagedInstanceLifecycleStage {
}

export function osManagementHubManagedInstanceLifecycleStageToTerraform(struct?: OsManagementHubManagedInstanceLifecycleStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osManagementHubManagedInstanceLifecycleStageToHclTerraform(struct?: OsManagementHubManagedInstanceLifecycleStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsManagementHubManagedInstanceLifecycleStageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OsManagementHubManagedInstanceLifecycleStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubManagedInstanceLifecycleStage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class OsManagementHubManagedInstanceLifecycleStageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OsManagementHubManagedInstanceLifecycleStageOutputReference {
    return new OsManagementHubManagedInstanceLifecycleStageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubManagedInstanceManagedInstanceGroup {
}

export function osManagementHubManagedInstanceManagedInstanceGroupToTerraform(struct?: OsManagementHubManagedInstanceManagedInstanceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osManagementHubManagedInstanceManagedInstanceGroupToHclTerraform(struct?: OsManagementHubManagedInstanceManagedInstanceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsManagementHubManagedInstanceManagedInstanceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OsManagementHubManagedInstanceManagedInstanceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubManagedInstanceManagedInstanceGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class OsManagementHubManagedInstanceManagedInstanceGroupList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OsManagementHubManagedInstanceManagedInstanceGroupOutputReference {
    return new OsManagementHubManagedInstanceManagedInstanceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubManagedInstanceSoftwareSources {
}

export function osManagementHubManagedInstanceSoftwareSourcesToTerraform(struct?: OsManagementHubManagedInstanceSoftwareSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osManagementHubManagedInstanceSoftwareSourcesToHclTerraform(struct?: OsManagementHubManagedInstanceSoftwareSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsManagementHubManagedInstanceSoftwareSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OsManagementHubManagedInstanceSoftwareSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubManagedInstanceSoftwareSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_mandatory_for_autonomous_linux - computed: true, optional: false, required: false
  public get isMandatoryForAutonomousLinux() {
    return this.getBooleanAttribute('is_mandatory_for_autonomous_linux');
  }

  // software_source_type - computed: true, optional: false, required: false
  public get softwareSourceType() {
    return this.getStringAttribute('software_source_type');
  }
}

export class OsManagementHubManagedInstanceSoftwareSourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OsManagementHubManagedInstanceSoftwareSourcesOutputReference {
    return new OsManagementHubManagedInstanceSoftwareSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubManagedInstanceAutonomousSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance#is_data_collection_authorized OsManagementHubManagedInstance#is_data_collection_authorized}
  */
  readonly isDataCollectionAuthorized?: boolean | cdktf.IResolvable;
}

export function osManagementHubManagedInstanceAutonomousSettingsToTerraform(struct?: OsManagementHubManagedInstanceAutonomousSettingsOutputReference | OsManagementHubManagedInstanceAutonomousSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_data_collection_authorized: cdktf.booleanToTerraform(struct!.isDataCollectionAuthorized),
  }
}


export function osManagementHubManagedInstanceAutonomousSettingsToHclTerraform(struct?: OsManagementHubManagedInstanceAutonomousSettingsOutputReference | OsManagementHubManagedInstanceAutonomousSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_data_collection_authorized: {
      value: cdktf.booleanToHclTerraform(struct!.isDataCollectionAuthorized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubManagedInstanceAutonomousSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsManagementHubManagedInstanceAutonomousSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDataCollectionAuthorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDataCollectionAuthorized = this._isDataCollectionAuthorized;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubManagedInstanceAutonomousSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isDataCollectionAuthorized = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isDataCollectionAuthorized = value.isDataCollectionAuthorized;
    }
  }

  // is_data_collection_authorized - computed: true, optional: true, required: false
  private _isDataCollectionAuthorized?: boolean | cdktf.IResolvable; 
  public get isDataCollectionAuthorized() {
    return this.getBooleanAttribute('is_data_collection_authorized');
  }
  public set isDataCollectionAuthorized(value: boolean | cdktf.IResolvable) {
    this._isDataCollectionAuthorized = value;
  }
  public resetIsDataCollectionAuthorized() {
    this._isDataCollectionAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDataCollectionAuthorizedInput() {
    return this._isDataCollectionAuthorized;
  }

  // scheduled_job_id - computed: true, optional: false, required: false
  public get scheduledJobId() {
    return this.getStringAttribute('scheduled_job_id');
  }
}
export interface OsManagementHubManagedInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance#create OsManagementHubManagedInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance#delete OsManagementHubManagedInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance#update OsManagementHubManagedInstance#update}
  */
  readonly update?: string;
}

export function osManagementHubManagedInstanceTimeoutsToTerraform(struct?: OsManagementHubManagedInstanceTimeouts | cdktf.IResolvable): any {
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


export function osManagementHubManagedInstanceTimeoutsToHclTerraform(struct?: OsManagementHubManagedInstanceTimeouts | cdktf.IResolvable): any {
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

export class OsManagementHubManagedInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OsManagementHubManagedInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OsManagementHubManagedInstanceTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance oci_os_management_hub_managed_instance}
*/
export class OsManagementHubManagedInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_managed_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsManagementHubManagedInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsManagementHubManagedInstance to import
  * @param importFromId The id of the existing OsManagementHubManagedInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsManagementHubManagedInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_managed_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/os_management_hub_managed_instance oci_os_management_hub_managed_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsManagementHubManagedInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: OsManagementHubManagedInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_managed_instance',
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
    this._description = config.description;
    this._id = config.id;
    this._managedInstanceId = config.managedInstanceId;
    this._notificationTopicId = config.notificationTopicId;
    this._primaryManagementStationId = config.primaryManagementStationId;
    this._secondaryManagementStationId = config.secondaryManagementStationId;
    this._autonomousSettings.internalValue = config.autonomousSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_version - computed: true, optional: false, required: false
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // bug_updates_available - computed: true, optional: false, required: false
  public get bugUpdatesAvailable() {
    return this.getNumberAttribute('bug_updates_available');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enhancement_updates_available - computed: true, optional: false, required: false
  public get enhancementUpdatesAvailable() {
    return this.getNumberAttribute('enhancement_updates_available');
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

  // installed_packages - computed: true, optional: false, required: false
  public get installedPackages() {
    return this.getNumberAttribute('installed_packages');
  }

  // installed_windows_updates - computed: true, optional: false, required: false
  public get installedWindowsUpdates() {
    return this.getNumberAttribute('installed_windows_updates');
  }

  // is_managed_by_autonomous_linux - computed: true, optional: false, required: false
  public get isManagedByAutonomousLinux() {
    return this.getBooleanAttribute('is_managed_by_autonomous_linux');
  }

  // is_management_station - computed: true, optional: false, required: false
  public get isManagementStation() {
    return this.getBooleanAttribute('is_management_station');
  }

  // is_reboot_required - computed: true, optional: false, required: false
  public get isRebootRequired() {
    return this.getBooleanAttribute('is_reboot_required');
  }

  // ksplice_effective_kernel_version - computed: true, optional: false, required: false
  public get kspliceEffectiveKernelVersion() {
    return this.getStringAttribute('ksplice_effective_kernel_version');
  }

  // lifecycle_environment - computed: true, optional: false, required: false
  private _lifecycleEnvironment = new OsManagementHubManagedInstanceLifecycleEnvironmentList(this, "lifecycle_environment", false);
  public get lifecycleEnvironment() {
    return this._lifecycleEnvironment;
  }

  // lifecycle_stage - computed: true, optional: false, required: false
  private _lifecycleStage = new OsManagementHubManagedInstanceLifecycleStageList(this, "lifecycle_stage", false);
  public get lifecycleStage() {
    return this._lifecycleStage;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // managed_instance_group - computed: true, optional: false, required: false
  private _managedInstanceGroup = new OsManagementHubManagedInstanceManagedInstanceGroupList(this, "managed_instance_group", false);
  public get managedInstanceGroup() {
    return this._managedInstanceGroup;
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

  // notification_topic_id - computed: true, optional: true, required: false
  private _notificationTopicId?: string; 
  public get notificationTopicId() {
    return this.getStringAttribute('notification_topic_id');
  }
  public set notificationTopicId(value: string) {
    this._notificationTopicId = value;
  }
  public resetNotificationTopicId() {
    this._notificationTopicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicIdInput() {
    return this._notificationTopicId;
  }

  // os_family - computed: true, optional: false, required: false
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // os_kernel_version - computed: true, optional: false, required: false
  public get osKernelVersion() {
    return this.getStringAttribute('os_kernel_version');
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // other_updates_available - computed: true, optional: false, required: false
  public get otherUpdatesAvailable() {
    return this.getNumberAttribute('other_updates_available');
  }

  // primary_management_station_id - computed: true, optional: true, required: false
  private _primaryManagementStationId?: string; 
  public get primaryManagementStationId() {
    return this.getStringAttribute('primary_management_station_id');
  }
  public set primaryManagementStationId(value: string) {
    this._primaryManagementStationId = value;
  }
  public resetPrimaryManagementStationId() {
    this._primaryManagementStationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryManagementStationIdInput() {
    return this._primaryManagementStationId;
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // profile_version - computed: true, optional: false, required: false
  public get profileVersion() {
    return this.getStringAttribute('profile_version');
  }

  // scheduled_job_count - computed: true, optional: false, required: false
  public get scheduledJobCount() {
    return this.getNumberAttribute('scheduled_job_count');
  }

  // secondary_management_station_id - computed: true, optional: true, required: false
  private _secondaryManagementStationId?: string; 
  public get secondaryManagementStationId() {
    return this.getStringAttribute('secondary_management_station_id');
  }
  public set secondaryManagementStationId(value: string) {
    this._secondaryManagementStationId = value;
  }
  public resetSecondaryManagementStationId() {
    this._secondaryManagementStationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryManagementStationIdInput() {
    return this._secondaryManagementStationId;
  }

  // security_updates_available - computed: true, optional: false, required: false
  public get securityUpdatesAvailable() {
    return this.getNumberAttribute('security_updates_available');
  }

  // software_sources - computed: true, optional: false, required: false
  private _softwareSources = new OsManagementHubManagedInstanceSoftwareSourcesList(this, "software_sources", false);
  public get softwareSources() {
    return this._softwareSources;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_boot - computed: true, optional: false, required: false
  public get timeLastBoot() {
    return this.getStringAttribute('time_last_boot');
  }

  // time_last_checkin - computed: true, optional: false, required: false
  public get timeLastCheckin() {
    return this.getStringAttribute('time_last_checkin');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // updates_available - computed: true, optional: false, required: false
  public get updatesAvailable() {
    return this.getNumberAttribute('updates_available');
  }

  // work_request_count - computed: true, optional: false, required: false
  public get workRequestCount() {
    return this.getNumberAttribute('work_request_count');
  }

  // autonomous_settings - computed: false, optional: true, required: false
  private _autonomousSettings = new OsManagementHubManagedInstanceAutonomousSettingsOutputReference(this, "autonomous_settings");
  public get autonomousSettings() {
    return this._autonomousSettings;
  }
  public putAutonomousSettings(value: OsManagementHubManagedInstanceAutonomousSettings) {
    this._autonomousSettings.internalValue = value;
  }
  public resetAutonomousSettings() {
    this._autonomousSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousSettingsInput() {
    return this._autonomousSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsManagementHubManagedInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsManagementHubManagedInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      notification_topic_id: cdktf.stringToTerraform(this._notificationTopicId),
      primary_management_station_id: cdktf.stringToTerraform(this._primaryManagementStationId),
      secondary_management_station_id: cdktf.stringToTerraform(this._secondaryManagementStationId),
      autonomous_settings: osManagementHubManagedInstanceAutonomousSettingsToTerraform(this._autonomousSettings.internalValue),
      timeouts: osManagementHubManagedInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      managed_instance_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_topic_id: {
        value: cdktf.stringToHclTerraform(this._notificationTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_management_station_id: {
        value: cdktf.stringToHclTerraform(this._primaryManagementStationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_management_station_id: {
        value: cdktf.stringToHclTerraform(this._secondaryManagementStationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autonomous_settings: {
        value: osManagementHubManagedInstanceAutonomousSettingsToHclTerraform(this._autonomousSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsManagementHubManagedInstanceAutonomousSettingsList",
      },
      timeouts: {
        value: osManagementHubManagedInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OsManagementHubManagedInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
