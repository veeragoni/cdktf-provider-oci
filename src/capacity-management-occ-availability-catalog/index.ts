// https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CapacityManagementOccAvailabilityCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#base64encoded_catalog_details CapacityManagementOccAvailabilityCatalog#base64encoded_catalog_details}
  */
  readonly base64EncodedCatalogDetails: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#compartment_id CapacityManagementOccAvailabilityCatalog#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#defined_tags CapacityManagementOccAvailabilityCatalog#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#description CapacityManagementOccAvailabilityCatalog#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#display_name CapacityManagementOccAvailabilityCatalog#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#freeform_tags CapacityManagementOccAvailabilityCatalog#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#id CapacityManagementOccAvailabilityCatalog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#namespace CapacityManagementOccAvailabilityCatalog#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#occ_customer_group_id CapacityManagementOccAvailabilityCatalog#occ_customer_group_id}
  */
  readonly occCustomerGroupId: string;
  /**
  * metadata_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#metadata_details CapacityManagementOccAvailabilityCatalog#metadata_details}
  */
  readonly metadataDetails?: CapacityManagementOccAvailabilityCatalogMetadataDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#timeouts CapacityManagementOccAvailabilityCatalog#timeouts}
  */
  readonly timeouts?: CapacityManagementOccAvailabilityCatalogTimeouts;
}
export interface CapacityManagementOccAvailabilityCatalogDetails {
}

export function capacityManagementOccAvailabilityCatalogDetailsToTerraform(struct?: CapacityManagementOccAvailabilityCatalogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function capacityManagementOccAvailabilityCatalogDetailsToHclTerraform(struct?: CapacityManagementOccAvailabilityCatalogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CapacityManagementOccAvailabilityCatalogDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapacityManagementOccAvailabilityCatalogDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityManagementOccAvailabilityCatalogDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_quantity - computed: true, optional: false, required: false
  public get availableQuantity() {
    return this.getStringAttribute('available_quantity');
  }

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // date_expected_capacity_handover - computed: true, optional: false, required: false
  public get dateExpectedCapacityHandover() {
    return this.getStringAttribute('date_expected_capacity_handover');
  }

  // date_final_customer_order - computed: true, optional: false, required: false
  public get dateFinalCustomerOrder() {
    return this.getStringAttribute('date_final_customer_order');
  }

  // demanded_quantity - computed: true, optional: false, required: false
  public get demandedQuantity() {
    return this.getStringAttribute('demanded_quantity');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // total_available_quantity - computed: true, optional: false, required: false
  public get totalAvailableQuantity() {
    return this.getStringAttribute('total_available_quantity');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // workload_type - computed: true, optional: false, required: false
  public get workloadType() {
    return this.getStringAttribute('workload_type');
  }
}

export class CapacityManagementOccAvailabilityCatalogDetailsList extends cdktf.ComplexList {

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
  public get(index: number): CapacityManagementOccAvailabilityCatalogDetailsOutputReference {
    return new CapacityManagementOccAvailabilityCatalogDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapacityManagementOccAvailabilityCatalogMetadataDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#format_version CapacityManagementOccAvailabilityCatalog#format_version}
  */
  readonly formatVersion: string;
}

export function capacityManagementOccAvailabilityCatalogMetadataDetailsToTerraform(struct?: CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference | CapacityManagementOccAvailabilityCatalogMetadataDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format_version: cdktf.stringToTerraform(struct!.formatVersion),
  }
}


export function capacityManagementOccAvailabilityCatalogMetadataDetailsToHclTerraform(struct?: CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference | CapacityManagementOccAvailabilityCatalogMetadataDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format_version: {
      value: cdktf.stringToHclTerraform(struct!.formatVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CapacityManagementOccAvailabilityCatalogMetadataDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityManagementOccAvailabilityCatalogMetadataDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._formatVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._formatVersion = value.formatVersion;
    }
  }

  // format_version - computed: false, optional: false, required: true
  private _formatVersion?: string; 
  public get formatVersion() {
    return this.getStringAttribute('format_version');
  }
  public set formatVersion(value: string) {
    this._formatVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatVersionInput() {
    return this._formatVersion;
  }
}
export interface CapacityManagementOccAvailabilityCatalogTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#create CapacityManagementOccAvailabilityCatalog#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#delete CapacityManagementOccAvailabilityCatalog#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#update CapacityManagementOccAvailabilityCatalog#update}
  */
  readonly update?: string;
}

export function capacityManagementOccAvailabilityCatalogTimeoutsToTerraform(struct?: CapacityManagementOccAvailabilityCatalogTimeouts | cdktf.IResolvable): any {
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


export function capacityManagementOccAvailabilityCatalogTimeoutsToHclTerraform(struct?: CapacityManagementOccAvailabilityCatalogTimeouts | cdktf.IResolvable): any {
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

export class CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CapacityManagementOccAvailabilityCatalogTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapacityManagementOccAvailabilityCatalogTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog oci_capacity_management_occ_availability_catalog}
*/
export class CapacityManagementOccAvailabilityCatalog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_capacity_management_occ_availability_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CapacityManagementOccAvailabilityCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CapacityManagementOccAvailabilityCatalog to import
  * @param importFromId The id of the existing CapacityManagementOccAvailabilityCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CapacityManagementOccAvailabilityCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_capacity_management_occ_availability_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/capacity_management_occ_availability_catalog oci_capacity_management_occ_availability_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CapacityManagementOccAvailabilityCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: CapacityManagementOccAvailabilityCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_capacity_management_occ_availability_catalog',
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
    this._base64EncodedCatalogDetails = config.base64EncodedCatalogDetails;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._namespace = config.namespace;
    this._occCustomerGroupId = config.occCustomerGroupId;
    this._metadataDetails.internalValue = config.metadataDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64encoded_catalog_details - computed: false, optional: false, required: true
  private _base64EncodedCatalogDetails?: string; 
  public get base64EncodedCatalogDetails() {
    return this.getStringAttribute('base64encoded_catalog_details');
  }
  public set base64EncodedCatalogDetails(value: string) {
    this._base64EncodedCatalogDetails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodedCatalogDetailsInput() {
    return this._base64EncodedCatalogDetails;
  }

  // catalog_state - computed: true, optional: false, required: false
  public get catalogState() {
    return this.getStringAttribute('catalog_state');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // details - computed: true, optional: false, required: false
  private _details = new CapacityManagementOccAvailabilityCatalogDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // occ_customer_group_id - computed: false, optional: false, required: true
  private _occCustomerGroupId?: string; 
  public get occCustomerGroupId() {
    return this.getStringAttribute('occ_customer_group_id');
  }
  public set occCustomerGroupId(value: string) {
    this._occCustomerGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occCustomerGroupIdInput() {
    return this._occCustomerGroupId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // metadata_details - computed: false, optional: true, required: false
  private _metadataDetails = new CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference(this, "metadata_details");
  public get metadataDetails() {
    return this._metadataDetails;
  }
  public putMetadataDetails(value: CapacityManagementOccAvailabilityCatalogMetadataDetails) {
    this._metadataDetails.internalValue = value;
  }
  public resetMetadataDetails() {
    this._metadataDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataDetailsInput() {
    return this._metadataDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CapacityManagementOccAvailabilityCatalogTimeouts) {
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
      base64encoded_catalog_details: cdktf.stringToTerraform(this._base64EncodedCatalogDetails),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      occ_customer_group_id: cdktf.stringToTerraform(this._occCustomerGroupId),
      metadata_details: capacityManagementOccAvailabilityCatalogMetadataDetailsToTerraform(this._metadataDetails.internalValue),
      timeouts: capacityManagementOccAvailabilityCatalogTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base64encoded_catalog_details: {
        value: cdktf.stringToHclTerraform(this._base64EncodedCatalogDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      occ_customer_group_id: {
        value: cdktf.stringToHclTerraform(this._occCustomerGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_details: {
        value: capacityManagementOccAvailabilityCatalogMetadataDetailsToHclTerraform(this._metadataDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapacityManagementOccAvailabilityCatalogMetadataDetailsList",
      },
      timeouts: {
        value: capacityManagementOccAvailabilityCatalogTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CapacityManagementOccAvailabilityCatalogTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
