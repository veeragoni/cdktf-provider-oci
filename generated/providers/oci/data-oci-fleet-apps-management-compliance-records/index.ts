// https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementComplianceRecordsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records#compartment_id DataOciFleetAppsManagementComplianceRecords#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records#compartment_id_in_subtree DataOciFleetAppsManagementComplianceRecords#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records#compliance_state DataOciFleetAppsManagementComplianceRecords#compliance_state}
  */
  readonly complianceState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records#entity_id DataOciFleetAppsManagementComplianceRecords#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records#id DataOciFleetAppsManagementComplianceRecords#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records#product_name DataOciFleetAppsManagementComplianceRecords#product_name}
  */
  readonly productName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records#product_stack DataOciFleetAppsManagementComplianceRecords#product_stack}
  */
  readonly productStack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records#resource_id DataOciFleetAppsManagementComplianceRecords#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records#target_name DataOciFleetAppsManagementComplianceRecords#target_name}
  */
  readonly targetName?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records#filter DataOciFleetAppsManagementComplianceRecords#filter}
  */
  readonly filter?: DataOciFleetAppsManagementComplianceRecordsFilter[] | cdktf.IResolvable;
}
export interface DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchProduct {
}

export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchProductToTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchProductToHclTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchProductOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchProduct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchProduct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // product_stack - computed: true, optional: false, required: false
  public get productStack() {
    return this.getStringAttribute('product_stack');
  }

  // product_version - computed: true, optional: false, required: false
  public get productVersion() {
    return this.getStringAttribute('product_version');
  }
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchProductList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchProductOutputReference {
    return new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchProductOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatch {
}

export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchToTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchToHclTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // patch_description - computed: true, optional: false, required: false
  public get patchDescription() {
    return this.getStringAttribute('patch_description');
  }

  // patch_id - computed: true, optional: false, required: false
  public get patchId() {
    return this.getStringAttribute('patch_id');
  }

  // patch_name - computed: true, optional: false, required: false
  public get patchName() {
    return this.getStringAttribute('patch_name');
  }

  // patch_type - computed: true, optional: false, required: false
  public get patchType() {
    return this.getStringAttribute('patch_type');
  }

  // product - computed: true, optional: false, required: false
  private _product = new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchProductList(this, "product", false);
  public get product() {
    return this._product;
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // time_released - computed: true, optional: false, required: false
  public get timeReleased() {
    return this.getStringAttribute('time_released');
  }
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchOutputReference {
    return new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyPatchSelection {
}

export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyPatchSelectionToTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyPatchSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyPatchSelectionToHclTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyPatchSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyPatchSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyPatchSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyPatchSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days_since_release - computed: true, optional: false, required: false
  public get daysSinceRelease() {
    return this.getNumberAttribute('days_since_release');
  }

  // patch_level - computed: true, optional: false, required: false
  public get patchLevel() {
    return this.getStringAttribute('patch_level');
  }

  // patch_name - computed: true, optional: false, required: false
  public get patchName() {
    return this.getStringAttribute('patch_name');
  }

  // selection_type - computed: true, optional: false, required: false
  public get selectionType() {
    return this.getStringAttribute('selection_type');
  }
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyPatchSelectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyPatchSelectionOutputReference {
    return new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyPatchSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicy {
}

export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyToTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyToHclTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance_policy_display_name - computed: true, optional: false, required: false
  public get compliancePolicyDisplayName() {
    return this.getStringAttribute('compliance_policy_display_name');
  }

  // compliance_policy_id - computed: true, optional: false, required: false
  public get compliancePolicyId() {
    return this.getStringAttribute('compliance_policy_id');
  }

  // compliance_policy_rule_display_name - computed: true, optional: false, required: false
  public get compliancePolicyRuleDisplayName() {
    return this.getStringAttribute('compliance_policy_rule_display_name');
  }

  // compliance_policy_rule_id - computed: true, optional: false, required: false
  public get compliancePolicyRuleId() {
    return this.getStringAttribute('compliance_policy_rule_id');
  }

  // grace_period - computed: true, optional: false, required: false
  public get gracePeriod() {
    return this.getStringAttribute('grace_period');
  }

  // patch_selection - computed: true, optional: false, required: false
  private _patchSelection = new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyPatchSelectionList(this, "patch_selection", false);
  public get patchSelection() {
    return this._patchSelection;
  }
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyOutputReference {
    return new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsResource {
}

export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsResourceToTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsResourceToHclTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment - computed: true, optional: false, required: false
  public get compartment() {
    return this.getStringAttribute('compartment');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
  }
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsResourceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsResourceOutputReference {
    return new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsTarget {
}

export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsTargetToTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsTargetToHclTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_name - computed: true, optional: false, required: false
  public get targetName() {
    return this.getStringAttribute('target_name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsTargetList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsTargetOutputReference {
    return new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItems {
}

export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsToTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsToHclTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compliance_state - computed: true, optional: false, required: false
  public get complianceState() {
    return this.getStringAttribute('compliance_state');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // entity_display_name - computed: true, optional: false, required: false
  public get entityDisplayName() {
    return this.getStringAttribute('entity_display_name');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
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

  // patch - computed: true, optional: false, required: false
  private _patch = new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPatchList(this, "patch", false);
  public get patch() {
    return this._patch;
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsPolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }

  // resource - computed: true, optional: false, required: false
  private _resource = new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsResourceList(this, "resource", false);
  public get resource() {
    return this._resource;
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

  // target - computed: true, optional: false, required: false
  private _target = new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsTargetList(this, "target", false);
  public get target() {
    return this._target;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsOutputReference {
    return new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollection {
}

export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionToTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionToHclTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionOutputReference {
    return new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementComplianceRecordsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records#name DataOciFleetAppsManagementComplianceRecords#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records#regex DataOciFleetAppsManagementComplianceRecords#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records#values DataOciFleetAppsManagementComplianceRecords#values}
  */
  readonly values: string[];
}

export function dataOciFleetAppsManagementComplianceRecordsFilterToTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciFleetAppsManagementComplianceRecordsFilterToHclTerraform(struct?: DataOciFleetAppsManagementComplianceRecordsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciFleetAppsManagementComplianceRecordsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementComplianceRecordsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementComplianceRecordsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciFleetAppsManagementComplianceRecordsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciFleetAppsManagementComplianceRecordsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciFleetAppsManagementComplianceRecordsFilterOutputReference {
    return new DataOciFleetAppsManagementComplianceRecordsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records oci_fleet_apps_management_compliance_records}
*/
export class DataOciFleetAppsManagementComplianceRecords extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_compliance_records";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetAppsManagementComplianceRecords resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetAppsManagementComplianceRecords to import
  * @param importFromId The id of the existing DataOciFleetAppsManagementComplianceRecords that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetAppsManagementComplianceRecords to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_compliance_records", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/fleet_apps_management_compliance_records oci_fleet_apps_management_compliance_records} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementComplianceRecordsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementComplianceRecordsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_compliance_records',
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
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._complianceState = config.complianceState;
    this._entityId = config.entityId;
    this._id = config.id;
    this._productName = config.productName;
    this._productStack = config.productStack;
    this._resourceId = config.resourceId;
    this._targetName = config.targetName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // compartment_id_in_subtree - computed: false, optional: true, required: false
  private _compartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }
  public set compartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._compartmentIdInSubtree = value;
  }
  public resetCompartmentIdInSubtree() {
    this._compartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInSubtreeInput() {
    return this._compartmentIdInSubtree;
  }

  // compliance_record_collection - computed: true, optional: false, required: false
  private _complianceRecordCollection = new DataOciFleetAppsManagementComplianceRecordsComplianceRecordCollectionList(this, "compliance_record_collection", false);
  public get complianceRecordCollection() {
    return this._complianceRecordCollection;
  }

  // compliance_state - computed: false, optional: true, required: false
  private _complianceState?: string; 
  public get complianceState() {
    return this.getStringAttribute('compliance_state');
  }
  public set complianceState(value: string) {
    this._complianceState = value;
  }
  public resetComplianceState() {
    this._complianceState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceStateInput() {
    return this._complianceState;
  }

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
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

  // product_name - computed: false, optional: true, required: false
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // product_stack - computed: false, optional: true, required: false
  private _productStack?: string; 
  public get productStack() {
    return this.getStringAttribute('product_stack');
  }
  public set productStack(value: string) {
    this._productStack = value;
  }
  public resetProductStack() {
    this._productStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productStackInput() {
    return this._productStack;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciFleetAppsManagementComplianceRecordsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciFleetAppsManagementComplianceRecordsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      compliance_state: cdktf.stringToTerraform(this._complianceState),
      entity_id: cdktf.stringToTerraform(this._entityId),
      id: cdktf.stringToTerraform(this._id),
      product_name: cdktf.stringToTerraform(this._productName),
      product_stack: cdktf.stringToTerraform(this._productStack),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      target_name: cdktf.stringToTerraform(this._targetName),
      filter: cdktf.listMapper(dataOciFleetAppsManagementComplianceRecordsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._compartmentIdInSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compliance_state: {
        value: cdktf.stringToHclTerraform(this._complianceState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
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
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_stack: {
        value: cdktf.stringToHclTerraform(this._productStack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciFleetAppsManagementComplianceRecordsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciFleetAppsManagementComplianceRecordsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
