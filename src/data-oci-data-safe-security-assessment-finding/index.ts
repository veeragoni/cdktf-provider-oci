// https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSecurityAssessmentFindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#access_level DataOciDataSafeSecurityAssessmentFinding#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#category DataOciDataSafeSecurityAssessmentFinding#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFinding#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#contains_references DataOciDataSafeSecurityAssessmentFinding#contains_references}
  */
  readonly containsReferences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#contains_severity DataOciDataSafeSecurityAssessmentFinding#contains_severity}
  */
  readonly containsSeverity?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#field DataOciDataSafeSecurityAssessmentFinding#field}
  */
  readonly field?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#finding_key DataOciDataSafeSecurityAssessmentFinding#finding_key}
  */
  readonly findingKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#id DataOciDataSafeSecurityAssessmentFinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#is_top_finding DataOciDataSafeSecurityAssessmentFinding#is_top_finding}
  */
  readonly isTopFinding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#references DataOciDataSafeSecurityAssessmentFinding#references}
  */
  readonly references?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#scim_query DataOciDataSafeSecurityAssessmentFinding#scim_query}
  */
  readonly scimQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#security_assessment_id DataOciDataSafeSecurityAssessmentFinding#security_assessment_id}
  */
  readonly securityAssessmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#severity DataOciDataSafeSecurityAssessmentFinding#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#state DataOciDataSafeSecurityAssessmentFinding#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#target_id DataOciDataSafeSecurityAssessmentFinding#target_id}
  */
  readonly targetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#target_ids DataOciDataSafeSecurityAssessmentFinding#target_ids}
  */
  readonly targetIds?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#filter DataOciDataSafeSecurityAssessmentFinding#filter}
  */
  readonly filter?: DataOciDataSafeSecurityAssessmentFindingFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeSecurityAssessmentFindingFindingsReferences {
}

export function dataOciDataSafeSecurityAssessmentFindingFindingsReferencesToTerraform(struct?: DataOciDataSafeSecurityAssessmentFindingFindingsReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentFindingFindingsReferencesToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentFindingFindingsReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentFindingFindingsReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentFindingFindingsReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cis - computed: true, optional: false, required: false
  public get cis() {
    return this.getStringAttribute('cis');
  }

  // gdpr - computed: true, optional: false, required: false
  public get gdpr() {
    return this.getStringAttribute('gdpr');
  }

  // obp - computed: true, optional: false, required: false
  public get obp() {
    return this.getStringAttribute('obp');
  }

  // orp - computed: true, optional: false, required: false
  public get orp() {
    return this.getStringAttribute('orp');
  }

  // stig - computed: true, optional: false, required: false
  public get stig() {
    return this.getStringAttribute('stig');
  }
}

export class DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference {
    return new DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentFindingFindings {
}

export function dataOciDataSafeSecurityAssessmentFindingFindingsToTerraform(struct?: DataOciDataSafeSecurityAssessmentFindingFindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentFindingFindingsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentFindingFindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentFindingFindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentFindingFindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assessment_id - computed: true, optional: false, required: false
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getListAttribute('details');
  }

  // doclink - computed: true, optional: false, required: false
  public get doclink() {
    return this.getStringAttribute('doclink');
  }

  // has_target_db_risk_level_changed - computed: true, optional: false, required: false
  public get hasTargetDbRiskLevelChanged() {
    return this.getBooleanAttribute('has_target_db_risk_level_changed');
  }

  // is_risk_modified - computed: true, optional: false, required: false
  public get isRiskModified() {
    return this.getBooleanAttribute('is_risk_modified');
  }

  // is_top_finding - computed: true, optional: false, required: false
  public get isTopFinding() {
    return this.getBooleanAttribute('is_top_finding');
  }

  // justification - computed: true, optional: false, required: false
  public get justification() {
    return this.getStringAttribute('justification');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // oneline - computed: true, optional: false, required: false
  public get oneline() {
    return this.getStringAttribute('oneline');
  }

  // oracle_defined_severity - computed: true, optional: false, required: false
  public get oracleDefinedSeverity() {
    return this.getStringAttribute('oracle_defined_severity');
  }

  // references - computed: true, optional: false, required: false
  private _references = new DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }

  // remarks - computed: true, optional: false, required: false
  public get remarks() {
    return this.getStringAttribute('remarks');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // time_valid_until - computed: true, optional: false, required: false
  public get timeValidUntil() {
    return this.getStringAttribute('time_valid_until');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentFindingFindingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference {
    return new DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentFindingFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#name DataOciDataSafeSecurityAssessmentFinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#regex DataOciDataSafeSecurityAssessmentFinding#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#values DataOciDataSafeSecurityAssessmentFinding#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeSecurityAssessmentFindingFilterToTerraform(struct?: DataOciDataSafeSecurityAssessmentFindingFilter | cdktf.IResolvable): any {
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


export function dataOciDataSafeSecurityAssessmentFindingFilterToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentFindingFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeSecurityAssessmentFindingFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentFindingFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeSecurityAssessmentFindingFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeSecurityAssessmentFindingFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeSecurityAssessmentFindingFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeSecurityAssessmentFindingFilterOutputReference {
    return new DataOciDataSafeSecurityAssessmentFindingFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding oci_data_safe_security_assessment_finding}
*/
export class DataOciDataSafeSecurityAssessmentFinding extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_security_assessment_finding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentFinding to import
  * @param importFromId The id of the existing DataOciDataSafeSecurityAssessmentFinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentFinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_security_assessment_finding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/data_safe_security_assessment_finding oci_data_safe_security_assessment_finding} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSecurityAssessmentFindingConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSecurityAssessmentFindingConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_security_assessment_finding',
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
    this._accessLevel = config.accessLevel;
    this._category = config.category;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._containsReferences = config.containsReferences;
    this._containsSeverity = config.containsSeverity;
    this._field = config.field;
    this._findingKey = config.findingKey;
    this._id = config.id;
    this._isTopFinding = config.isTopFinding;
    this._references = config.references;
    this._scimQuery = config.scimQuery;
    this._securityAssessmentId = config.securityAssessmentId;
    this._severity = config.severity;
    this._state = config.state;
    this._targetId = config.targetId;
    this._targetIds = config.targetIds;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // contains_references - computed: false, optional: true, required: false
  private _containsReferences?: string[]; 
  public get containsReferences() {
    return this.getListAttribute('contains_references');
  }
  public set containsReferences(value: string[]) {
    this._containsReferences = value;
  }
  public resetContainsReferences() {
    this._containsReferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsReferencesInput() {
    return this._containsReferences;
  }

  // contains_severity - computed: false, optional: true, required: false
  private _containsSeverity?: string[]; 
  public get containsSeverity() {
    return this.getListAttribute('contains_severity');
  }
  public set containsSeverity(value: string[]) {
    this._containsSeverity = value;
  }
  public resetContainsSeverity() {
    this._containsSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsSeverityInput() {
    return this._containsSeverity;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string[]; 
  public get field() {
    return this.getListAttribute('field');
  }
  public set field(value: string[]) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // finding_key - computed: false, optional: true, required: false
  private _findingKey?: string; 
  public get findingKey() {
    return this.getStringAttribute('finding_key');
  }
  public set findingKey(value: string) {
    this._findingKey = value;
  }
  public resetFindingKey() {
    this._findingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingKeyInput() {
    return this._findingKey;
  }

  // findings - computed: true, optional: false, required: false
  private _findings = new DataOciDataSafeSecurityAssessmentFindingFindingsList(this, "findings", false);
  public get findings() {
    return this._findings;
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

  // is_top_finding - computed: false, optional: true, required: false
  private _isTopFinding?: boolean | cdktf.IResolvable; 
  public get isTopFinding() {
    return this.getBooleanAttribute('is_top_finding');
  }
  public set isTopFinding(value: boolean | cdktf.IResolvable) {
    this._isTopFinding = value;
  }
  public resetIsTopFinding() {
    this._isTopFinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTopFindingInput() {
    return this._isTopFinding;
  }

  // references - computed: false, optional: true, required: false
  private _references?: string; 
  public get references() {
    return this.getStringAttribute('references');
  }
  public set references(value: string) {
    this._references = value;
  }
  public resetReferences() {
    this._references = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencesInput() {
    return this._references;
  }

  // scim_query - computed: false, optional: true, required: false
  private _scimQuery?: string; 
  public get scimQuery() {
    return this.getStringAttribute('scim_query');
  }
  public set scimQuery(value: string) {
    this._scimQuery = value;
  }
  public resetScimQuery() {
    this._scimQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimQueryInput() {
    return this._scimQuery;
  }

  // security_assessment_id - computed: false, optional: false, required: true
  private _securityAssessmentId?: string; 
  public get securityAssessmentId() {
    return this.getStringAttribute('security_assessment_id');
  }
  public set securityAssessmentId(value: string) {
    this._securityAssessmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAssessmentIdInput() {
    return this._securityAssessmentId;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_ids - computed: false, optional: true, required: false
  private _targetIds?: string[]; 
  public get targetIds() {
    return this.getListAttribute('target_ids');
  }
  public set targetIds(value: string[]) {
    this._targetIds = value;
  }
  public resetTargetIds() {
    this._targetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdsInput() {
    return this._targetIds;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeSecurityAssessmentFindingFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeSecurityAssessmentFindingFilter[] | cdktf.IResolvable) {
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
      access_level: cdktf.stringToTerraform(this._accessLevel),
      category: cdktf.stringToTerraform(this._category),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      contains_references: cdktf.listMapper(cdktf.stringToTerraform, false)(this._containsReferences),
      contains_severity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._containsSeverity),
      field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._field),
      finding_key: cdktf.stringToTerraform(this._findingKey),
      id: cdktf.stringToTerraform(this._id),
      is_top_finding: cdktf.booleanToTerraform(this._isTopFinding),
      references: cdktf.stringToTerraform(this._references),
      scim_query: cdktf.stringToTerraform(this._scimQuery),
      security_assessment_id: cdktf.stringToTerraform(this._securityAssessmentId),
      severity: cdktf.stringToTerraform(this._severity),
      state: cdktf.stringToTerraform(this._state),
      target_id: cdktf.stringToTerraform(this._targetId),
      target_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetIds),
      filter: cdktf.listMapper(dataOciDataSafeSecurityAssessmentFindingFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      contains_references: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._containsReferences),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      contains_severity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._containsSeverity),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._field),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      finding_key: {
        value: cdktf.stringToHclTerraform(this._findingKey),
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
      is_top_finding: {
        value: cdktf.booleanToHclTerraform(this._isTopFinding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      references: {
        value: cdktf.stringToHclTerraform(this._references),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_query: {
        value: cdktf.stringToHclTerraform(this._scimQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_assessment_id: {
        value: cdktf.stringToHclTerraform(this._securityAssessmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeSecurityAssessmentFindingFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeSecurityAssessmentFindingFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
