// https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/data_safe_security_assessment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSecurityAssessmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/data_safe_security_assessment#security_assessment_id DataOciDataSafeSecurityAssessment#security_assessment_id}
  */
  readonly securityAssessmentId: string;
}
export interface DataOciDataSafeSecurityAssessmentChecksReferences {
}

export function dataOciDataSafeSecurityAssessmentChecksReferencesToTerraform(struct?: DataOciDataSafeSecurityAssessmentChecksReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentChecksReferencesToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentChecksReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentChecksReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentChecksReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentChecksReferences | undefined) {
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

  // stig - computed: true, optional: false, required: false
  public get stig() {
    return this.getStringAttribute('stig');
  }
}

export class DataOciDataSafeSecurityAssessmentChecksReferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentChecksReferencesOutputReference {
    return new DataOciDataSafeSecurityAssessmentChecksReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentChecks {
}

export function dataOciDataSafeSecurityAssessmentChecksToTerraform(struct?: DataOciDataSafeSecurityAssessmentChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentChecksToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // oneline - computed: true, optional: false, required: false
  public get oneline() {
    return this.getStringAttribute('oneline');
  }

  // references - computed: true, optional: false, required: false
  private _references = new DataOciDataSafeSecurityAssessmentChecksReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }

  // remarks - computed: true, optional: false, required: false
  public get remarks() {
    return this.getStringAttribute('remarks');
  }

  // suggested_severity - computed: true, optional: false, required: false
  public get suggestedSeverity() {
    return this.getStringAttribute('suggested_severity');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciDataSafeSecurityAssessmentChecksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentChecksOutputReference {
    return new DataOciDataSafeSecurityAssessmentChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentStatisticsAdvisory {
}

export function dataOciDataSafeSecurityAssessmentStatisticsAdvisoryToTerraform(struct?: DataOciDataSafeSecurityAssessmentStatisticsAdvisory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentStatisticsAdvisoryToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentStatisticsAdvisory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentStatisticsAdvisory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentStatisticsAdvisory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auditing_findings_count - computed: true, optional: false, required: false
  public get auditingFindingsCount() {
    return this.getNumberAttribute('auditing_findings_count');
  }

  // authorization_control_findings_count - computed: true, optional: false, required: false
  public get authorizationControlFindingsCount() {
    return this.getNumberAttribute('authorization_control_findings_count');
  }

  // data_encryption_findings_count - computed: true, optional: false, required: false
  public get dataEncryptionFindingsCount() {
    return this.getNumberAttribute('data_encryption_findings_count');
  }

  // db_configuration_findings_count - computed: true, optional: false, required: false
  public get dbConfigurationFindingsCount() {
    return this.getNumberAttribute('db_configuration_findings_count');
  }

  // fine_grained_access_control_findings_count - computed: true, optional: false, required: false
  public get fineGrainedAccessControlFindingsCount() {
    return this.getNumberAttribute('fine_grained_access_control_findings_count');
  }

  // privileges_and_roles_findings_count - computed: true, optional: false, required: false
  public get privilegesAndRolesFindingsCount() {
    return this.getNumberAttribute('privileges_and_roles_findings_count');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }

  // user_accounts_findings_count - computed: true, optional: false, required: false
  public get userAccountsFindingsCount() {
    return this.getNumberAttribute('user_accounts_findings_count');
  }
}

export class DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference {
    return new DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentStatisticsDeferred {
}

export function dataOciDataSafeSecurityAssessmentStatisticsDeferredToTerraform(struct?: DataOciDataSafeSecurityAssessmentStatisticsDeferred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentStatisticsDeferredToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentStatisticsDeferred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentStatisticsDeferred | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentStatisticsDeferred | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auditing_findings_count - computed: true, optional: false, required: false
  public get auditingFindingsCount() {
    return this.getNumberAttribute('auditing_findings_count');
  }

  // authorization_control_findings_count - computed: true, optional: false, required: false
  public get authorizationControlFindingsCount() {
    return this.getNumberAttribute('authorization_control_findings_count');
  }

  // data_encryption_findings_count - computed: true, optional: false, required: false
  public get dataEncryptionFindingsCount() {
    return this.getNumberAttribute('data_encryption_findings_count');
  }

  // db_configuration_findings_count - computed: true, optional: false, required: false
  public get dbConfigurationFindingsCount() {
    return this.getNumberAttribute('db_configuration_findings_count');
  }

  // fine_grained_access_control_findings_count - computed: true, optional: false, required: false
  public get fineGrainedAccessControlFindingsCount() {
    return this.getNumberAttribute('fine_grained_access_control_findings_count');
  }

  // privileges_and_roles_findings_count - computed: true, optional: false, required: false
  public get privilegesAndRolesFindingsCount() {
    return this.getNumberAttribute('privileges_and_roles_findings_count');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }

  // user_accounts_findings_count - computed: true, optional: false, required: false
  public get userAccountsFindingsCount() {
    return this.getNumberAttribute('user_accounts_findings_count');
  }
}

export class DataOciDataSafeSecurityAssessmentStatisticsDeferredList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference {
    return new DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentStatisticsEvaluate {
}

export function dataOciDataSafeSecurityAssessmentStatisticsEvaluateToTerraform(struct?: DataOciDataSafeSecurityAssessmentStatisticsEvaluate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentStatisticsEvaluateToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentStatisticsEvaluate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentStatisticsEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentStatisticsEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auditing_findings_count - computed: true, optional: false, required: false
  public get auditingFindingsCount() {
    return this.getNumberAttribute('auditing_findings_count');
  }

  // authorization_control_findings_count - computed: true, optional: false, required: false
  public get authorizationControlFindingsCount() {
    return this.getNumberAttribute('authorization_control_findings_count');
  }

  // data_encryption_findings_count - computed: true, optional: false, required: false
  public get dataEncryptionFindingsCount() {
    return this.getNumberAttribute('data_encryption_findings_count');
  }

  // db_configuration_findings_count - computed: true, optional: false, required: false
  public get dbConfigurationFindingsCount() {
    return this.getNumberAttribute('db_configuration_findings_count');
  }

  // fine_grained_access_control_findings_count - computed: true, optional: false, required: false
  public get fineGrainedAccessControlFindingsCount() {
    return this.getNumberAttribute('fine_grained_access_control_findings_count');
  }

  // privileges_and_roles_findings_count - computed: true, optional: false, required: false
  public get privilegesAndRolesFindingsCount() {
    return this.getNumberAttribute('privileges_and_roles_findings_count');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }

  // user_accounts_findings_count - computed: true, optional: false, required: false
  public get userAccountsFindingsCount() {
    return this.getNumberAttribute('user_accounts_findings_count');
  }
}

export class DataOciDataSafeSecurityAssessmentStatisticsEvaluateList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference {
    return new DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentStatisticsHighRisk {
}

export function dataOciDataSafeSecurityAssessmentStatisticsHighRiskToTerraform(struct?: DataOciDataSafeSecurityAssessmentStatisticsHighRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentStatisticsHighRiskToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentStatisticsHighRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentStatisticsHighRisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentStatisticsHighRisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auditing_findings_count - computed: true, optional: false, required: false
  public get auditingFindingsCount() {
    return this.getNumberAttribute('auditing_findings_count');
  }

  // authorization_control_findings_count - computed: true, optional: false, required: false
  public get authorizationControlFindingsCount() {
    return this.getNumberAttribute('authorization_control_findings_count');
  }

  // data_encryption_findings_count - computed: true, optional: false, required: false
  public get dataEncryptionFindingsCount() {
    return this.getNumberAttribute('data_encryption_findings_count');
  }

  // db_configuration_findings_count - computed: true, optional: false, required: false
  public get dbConfigurationFindingsCount() {
    return this.getNumberAttribute('db_configuration_findings_count');
  }

  // fine_grained_access_control_findings_count - computed: true, optional: false, required: false
  public get fineGrainedAccessControlFindingsCount() {
    return this.getNumberAttribute('fine_grained_access_control_findings_count');
  }

  // privileges_and_roles_findings_count - computed: true, optional: false, required: false
  public get privilegesAndRolesFindingsCount() {
    return this.getNumberAttribute('privileges_and_roles_findings_count');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }

  // user_accounts_findings_count - computed: true, optional: false, required: false
  public get userAccountsFindingsCount() {
    return this.getNumberAttribute('user_accounts_findings_count');
  }
}

export class DataOciDataSafeSecurityAssessmentStatisticsHighRiskList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference {
    return new DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentStatisticsLowRisk {
}

export function dataOciDataSafeSecurityAssessmentStatisticsLowRiskToTerraform(struct?: DataOciDataSafeSecurityAssessmentStatisticsLowRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentStatisticsLowRiskToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentStatisticsLowRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentStatisticsLowRisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentStatisticsLowRisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auditing_findings_count - computed: true, optional: false, required: false
  public get auditingFindingsCount() {
    return this.getNumberAttribute('auditing_findings_count');
  }

  // authorization_control_findings_count - computed: true, optional: false, required: false
  public get authorizationControlFindingsCount() {
    return this.getNumberAttribute('authorization_control_findings_count');
  }

  // data_encryption_findings_count - computed: true, optional: false, required: false
  public get dataEncryptionFindingsCount() {
    return this.getNumberAttribute('data_encryption_findings_count');
  }

  // db_configuration_findings_count - computed: true, optional: false, required: false
  public get dbConfigurationFindingsCount() {
    return this.getNumberAttribute('db_configuration_findings_count');
  }

  // fine_grained_access_control_findings_count - computed: true, optional: false, required: false
  public get fineGrainedAccessControlFindingsCount() {
    return this.getNumberAttribute('fine_grained_access_control_findings_count');
  }

  // privileges_and_roles_findings_count - computed: true, optional: false, required: false
  public get privilegesAndRolesFindingsCount() {
    return this.getNumberAttribute('privileges_and_roles_findings_count');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }

  // user_accounts_findings_count - computed: true, optional: false, required: false
  public get userAccountsFindingsCount() {
    return this.getNumberAttribute('user_accounts_findings_count');
  }
}

export class DataOciDataSafeSecurityAssessmentStatisticsLowRiskList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference {
    return new DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentStatisticsMediumRisk {
}

export function dataOciDataSafeSecurityAssessmentStatisticsMediumRiskToTerraform(struct?: DataOciDataSafeSecurityAssessmentStatisticsMediumRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentStatisticsMediumRiskToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentStatisticsMediumRisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentStatisticsMediumRisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentStatisticsMediumRisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auditing_findings_count - computed: true, optional: false, required: false
  public get auditingFindingsCount() {
    return this.getNumberAttribute('auditing_findings_count');
  }

  // authorization_control_findings_count - computed: true, optional: false, required: false
  public get authorizationControlFindingsCount() {
    return this.getNumberAttribute('authorization_control_findings_count');
  }

  // data_encryption_findings_count - computed: true, optional: false, required: false
  public get dataEncryptionFindingsCount() {
    return this.getNumberAttribute('data_encryption_findings_count');
  }

  // db_configuration_findings_count - computed: true, optional: false, required: false
  public get dbConfigurationFindingsCount() {
    return this.getNumberAttribute('db_configuration_findings_count');
  }

  // fine_grained_access_control_findings_count - computed: true, optional: false, required: false
  public get fineGrainedAccessControlFindingsCount() {
    return this.getNumberAttribute('fine_grained_access_control_findings_count');
  }

  // privileges_and_roles_findings_count - computed: true, optional: false, required: false
  public get privilegesAndRolesFindingsCount() {
    return this.getNumberAttribute('privileges_and_roles_findings_count');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }

  // user_accounts_findings_count - computed: true, optional: false, required: false
  public get userAccountsFindingsCount() {
    return this.getNumberAttribute('user_accounts_findings_count');
  }
}

export class DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference {
    return new DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentStatisticsPass {
}

export function dataOciDataSafeSecurityAssessmentStatisticsPassToTerraform(struct?: DataOciDataSafeSecurityAssessmentStatisticsPass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentStatisticsPassToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentStatisticsPass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentStatisticsPass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentStatisticsPass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auditing_findings_count - computed: true, optional: false, required: false
  public get auditingFindingsCount() {
    return this.getNumberAttribute('auditing_findings_count');
  }

  // authorization_control_findings_count - computed: true, optional: false, required: false
  public get authorizationControlFindingsCount() {
    return this.getNumberAttribute('authorization_control_findings_count');
  }

  // data_encryption_findings_count - computed: true, optional: false, required: false
  public get dataEncryptionFindingsCount() {
    return this.getNumberAttribute('data_encryption_findings_count');
  }

  // db_configuration_findings_count - computed: true, optional: false, required: false
  public get dbConfigurationFindingsCount() {
    return this.getNumberAttribute('db_configuration_findings_count');
  }

  // fine_grained_access_control_findings_count - computed: true, optional: false, required: false
  public get fineGrainedAccessControlFindingsCount() {
    return this.getNumberAttribute('fine_grained_access_control_findings_count');
  }

  // privileges_and_roles_findings_count - computed: true, optional: false, required: false
  public get privilegesAndRolesFindingsCount() {
    return this.getNumberAttribute('privileges_and_roles_findings_count');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }

  // user_accounts_findings_count - computed: true, optional: false, required: false
  public get userAccountsFindingsCount() {
    return this.getNumberAttribute('user_accounts_findings_count');
  }
}

export class DataOciDataSafeSecurityAssessmentStatisticsPassList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference {
    return new DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentStatistics {
}

export function dataOciDataSafeSecurityAssessmentStatisticsToTerraform(struct?: DataOciDataSafeSecurityAssessmentStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentStatisticsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advisory - computed: true, optional: false, required: false
  private _advisory = new DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList(this, "advisory", false);
  public get advisory() {
    return this._advisory;
  }

  // deferred - computed: true, optional: false, required: false
  private _deferred = new DataOciDataSafeSecurityAssessmentStatisticsDeferredList(this, "deferred", false);
  public get deferred() {
    return this._deferred;
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataOciDataSafeSecurityAssessmentStatisticsEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }

  // high_risk - computed: true, optional: false, required: false
  private _highRisk = new DataOciDataSafeSecurityAssessmentStatisticsHighRiskList(this, "high_risk", false);
  public get highRisk() {
    return this._highRisk;
  }

  // low_risk - computed: true, optional: false, required: false
  private _lowRisk = new DataOciDataSafeSecurityAssessmentStatisticsLowRiskList(this, "low_risk", false);
  public get lowRisk() {
    return this._lowRisk;
  }

  // medium_risk - computed: true, optional: false, required: false
  private _mediumRisk = new DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList(this, "medium_risk", false);
  public get mediumRisk() {
    return this._mediumRisk;
  }

  // pass - computed: true, optional: false, required: false
  private _pass = new DataOciDataSafeSecurityAssessmentStatisticsPassList(this, "pass", false);
  public get pass() {
    return this._pass;
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }
}

export class DataOciDataSafeSecurityAssessmentStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsOutputReference {
    return new DataOciDataSafeSecurityAssessmentStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/data_safe_security_assessment oci_data_safe_security_assessment}
*/
export class DataOciDataSafeSecurityAssessment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_security_assessment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSecurityAssessment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSecurityAssessment to import
  * @param importFromId The id of the existing DataOciDataSafeSecurityAssessment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/data_safe_security_assessment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSecurityAssessment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_security_assessment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/data_safe_security_assessment oci_data_safe_security_assessment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSecurityAssessmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSecurityAssessmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_security_assessment',
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
    this._securityAssessmentId = config.securityAssessmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_template_trigger - computed: true, optional: false, required: false
  public get applyTemplateTrigger() {
    return this.getNumberAttribute('apply_template_trigger');
  }

  // base_security_assessment_id - computed: true, optional: false, required: false
  public get baseSecurityAssessmentId() {
    return this.getStringAttribute('base_security_assessment_id');
  }

  // baseline_assessment_id - computed: true, optional: false, required: false
  public get baselineAssessmentId() {
    return this.getStringAttribute('baseline_assessment_id');
  }

  // checks - computed: true, optional: false, required: false
  private _checks = new DataOciDataSafeSecurityAssessmentChecksList(this, "checks", false);
  public get checks() {
    return this._checks;
  }

  // compare_to_template_baseline_trigger - computed: true, optional: false, required: false
  public get compareToTemplateBaselineTrigger() {
    return this.getNumberAttribute('compare_to_template_baseline_trigger');
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // ignored_assessment_ids - computed: true, optional: false, required: false
  public get ignoredAssessmentIds() {
    return this.getListAttribute('ignored_assessment_ids');
  }

  // ignored_targets - computed: true, optional: false, required: false
  public get ignoredTargets() {
    return this.getListAttribute('ignored_targets');
  }

  // is_assessment_scheduled - computed: true, optional: false, required: false
  public get isAssessmentScheduled() {
    return this.getBooleanAttribute('is_assessment_scheduled');
  }

  // is_baseline - computed: true, optional: false, required: false
  public get isBaseline() {
    return this.getBooleanAttribute('is_baseline');
  }

  // is_deviated_from_baseline - computed: true, optional: false, required: false
  public get isDeviatedFromBaseline() {
    return this.getBooleanAttribute('is_deviated_from_baseline');
  }

  // last_compared_baseline_id - computed: true, optional: false, required: false
  public get lastComparedBaselineId() {
    return this.getStringAttribute('last_compared_baseline_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // remove_template_trigger - computed: true, optional: false, required: false
  public get removeTemplateTrigger() {
    return this.getNumberAttribute('remove_template_trigger');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // schedule_security_assessment_id - computed: true, optional: false, required: false
  public get scheduleSecurityAssessmentId() {
    return this.getStringAttribute('schedule_security_assessment_id');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // statistics - computed: true, optional: false, required: false
  private _statistics = new DataOciDataSafeSecurityAssessmentStatisticsList(this, "statistics", false);
  public get statistics() {
    return this._statistics;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_database_group_id - computed: true, optional: false, required: false
  public get targetDatabaseGroupId() {
    return this.getStringAttribute('target_database_group_id');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_ids - computed: true, optional: false, required: false
  public get targetIds() {
    return this.getListAttribute('target_ids');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // target_version - computed: true, optional: false, required: false
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }

  // template_assessment_id - computed: true, optional: false, required: false
  public get templateAssessmentId() {
    return this.getStringAttribute('template_assessment_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_assessed - computed: true, optional: false, required: false
  public get timeLastAssessed() {
    return this.getStringAttribute('time_last_assessed');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // triggered_by - computed: true, optional: false, required: false
  public get triggeredBy() {
    return this.getStringAttribute('triggered_by');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      security_assessment_id: cdktf.stringToTerraform(this._securityAssessmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      security_assessment_id: {
        value: cdktf.stringToHclTerraform(this._securityAssessmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
