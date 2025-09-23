// https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAiAnomalyDetectionModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_model#model_id DataOciAiAnomalyDetectionModel#model_id}
  */
  readonly modelId: string;
}
export interface DataOciAiAnomalyDetectionModelModelTrainingDetails {
}

export function dataOciAiAnomalyDetectionModelModelTrainingDetailsToTerraform(struct?: DataOciAiAnomalyDetectionModelModelTrainingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiAnomalyDetectionModelModelTrainingDetailsToHclTerraform(struct?: DataOciAiAnomalyDetectionModelModelTrainingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiAnomalyDetectionModelModelTrainingDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiAnomalyDetectionModelModelTrainingDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm_hint - computed: true, optional: false, required: false
  public get algorithmHint() {
    return this.getStringAttribute('algorithm_hint');
  }

  // data_asset_ids - computed: true, optional: false, required: false
  public get dataAssetIds() {
    return this.getListAttribute('data_asset_ids');
  }

  // target_fap - computed: true, optional: false, required: false
  public get targetFap() {
    return this.getNumberAttribute('target_fap');
  }

  // training_fraction - computed: true, optional: false, required: false
  public get trainingFraction() {
    return this.getNumberAttribute('training_fraction');
  }

  // window_size - computed: true, optional: false, required: false
  public get windowSize() {
    return this.getNumberAttribute('window_size');
  }
}

export class DataOciAiAnomalyDetectionModelModelTrainingDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference {
    return new DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails {
}

export function dataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsToTerraform(struct?: DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsToHclTerraform(struct?: DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_reduction_enabled - computed: true, optional: false, required: false
  public get isReductionEnabled() {
    return this.getBooleanAttribute('is_reduction_enabled');
  }

  // reduction_method - computed: true, optional: false, required: false
  public get reductionMethod() {
    return this.getStringAttribute('reduction_method');
  }

  // reduction_percentage - computed: true, optional: false, required: false
  public get reductionPercentage() {
    return this.getNumberAttribute('reduction_percentage');
  }
}

export class DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference {
    return new DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails {
}

export function dataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsToTerraform(struct?: DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsToHclTerraform(struct?: DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // fap - computed: true, optional: false, required: false
  public get fap() {
    return this.getNumberAttribute('fap');
  }

  // is_quantized - computed: true, optional: false, required: false
  public get isQuantized() {
    return this.getBooleanAttribute('is_quantized');
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }

  // mvi_ratio - computed: true, optional: false, required: false
  public get mviRatio() {
    return this.getNumberAttribute('mvi_ratio');
  }

  // signal_name - computed: true, optional: false, required: false
  public get signalName() {
    return this.getStringAttribute('signal_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // std - computed: true, optional: false, required: false
  public get std() {
    return this.getNumberAttribute('std');
  }
}

export class DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference {
    return new DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiAnomalyDetectionModelModelTrainingResults {
}

export function dataOciAiAnomalyDetectionModelModelTrainingResultsToTerraform(struct?: DataOciAiAnomalyDetectionModelModelTrainingResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiAnomalyDetectionModelModelTrainingResultsToHclTerraform(struct?: DataOciAiAnomalyDetectionModelModelTrainingResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiAnomalyDetectionModelModelTrainingResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiAnomalyDetectionModelModelTrainingResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fap - computed: true, optional: false, required: false
  public get fap() {
    return this.getNumberAttribute('fap');
  }

  // is_training_goal_achieved - computed: true, optional: false, required: false
  public get isTrainingGoalAchieved() {
    return this.getBooleanAttribute('is_training_goal_achieved');
  }

  // mae - computed: true, optional: false, required: false
  public get mae() {
    return this.getNumberAttribute('mae');
  }

  // max_inference_sync_rows - computed: true, optional: false, required: false
  public get maxInferenceSyncRows() {
    return this.getNumberAttribute('max_inference_sync_rows');
  }

  // multivariate_fap - computed: true, optional: false, required: false
  public get multivariateFap() {
    return this.getNumberAttribute('multivariate_fap');
  }

  // rmse - computed: true, optional: false, required: false
  public get rmse() {
    return this.getNumberAttribute('rmse');
  }

  // row_reduction_details - computed: true, optional: false, required: false
  private _rowReductionDetails = new DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList(this, "row_reduction_details", false);
  public get rowReductionDetails() {
    return this._rowReductionDetails;
  }

  // signal_details - computed: true, optional: false, required: false
  private _signalDetails = new DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList(this, "signal_details", false);
  public get signalDetails() {
    return this._signalDetails;
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getStringAttribute('warning');
  }

  // window_size - computed: true, optional: false, required: false
  public get windowSize() {
    return this.getNumberAttribute('window_size');
  }
}

export class DataOciAiAnomalyDetectionModelModelTrainingResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference {
    return new DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_model oci_ai_anomaly_detection_model}
*/
export class DataOciAiAnomalyDetectionModel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_anomaly_detection_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciAiAnomalyDetectionModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciAiAnomalyDetectionModel to import
  * @param importFromId The id of the existing DataOciAiAnomalyDetectionModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciAiAnomalyDetectionModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_anomaly_detection_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_model oci_ai_anomaly_detection_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAiAnomalyDetectionModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAiAnomalyDetectionModelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ai_anomaly_detection_model',
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
    this._modelId = config.modelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // model_training_details - computed: true, optional: false, required: false
  private _modelTrainingDetails = new DataOciAiAnomalyDetectionModelModelTrainingDetailsList(this, "model_training_details", false);
  public get modelTrainingDetails() {
    return this._modelTrainingDetails;
  }

  // model_training_results - computed: true, optional: false, required: false
  private _modelTrainingResults = new DataOciAiAnomalyDetectionModelModelTrainingResultsList(this, "model_training_results", false);
  public get modelTrainingResults() {
    return this._modelTrainingResults;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      model_id: cdktf.stringToTerraform(this._modelId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      model_id: {
        value: cdktf.stringToHclTerraform(this._modelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
