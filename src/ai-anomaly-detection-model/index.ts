// https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiAnomalyDetectionModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#compartment_id AiAnomalyDetectionModel#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#defined_tags AiAnomalyDetectionModel#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#description AiAnomalyDetectionModel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#display_name AiAnomalyDetectionModel#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#freeform_tags AiAnomalyDetectionModel#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#id AiAnomalyDetectionModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#project_id AiAnomalyDetectionModel#project_id}
  */
  readonly projectId: string;
  /**
  * model_training_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#model_training_details AiAnomalyDetectionModel#model_training_details}
  */
  readonly modelTrainingDetails: AiAnomalyDetectionModelModelTrainingDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#timeouts AiAnomalyDetectionModel#timeouts}
  */
  readonly timeouts?: AiAnomalyDetectionModelTimeouts;
}
export interface AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails {
}

export function aiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsToTerraform(struct?: AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsToHclTerraform(struct?: AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails | undefined) {
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

export class AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference {
    return new AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiAnomalyDetectionModelModelTrainingResultsSignalDetails {
}

export function aiAnomalyDetectionModelModelTrainingResultsSignalDetailsToTerraform(struct?: AiAnomalyDetectionModelModelTrainingResultsSignalDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiAnomalyDetectionModelModelTrainingResultsSignalDetailsToHclTerraform(struct?: AiAnomalyDetectionModelModelTrainingResultsSignalDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiAnomalyDetectionModelModelTrainingResultsSignalDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiAnomalyDetectionModelModelTrainingResultsSignalDetails | undefined) {
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

export class AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList extends cdktf.ComplexList {

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
  public get(index: number): AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference {
    return new AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiAnomalyDetectionModelModelTrainingResults {
}

export function aiAnomalyDetectionModelModelTrainingResultsToTerraform(struct?: AiAnomalyDetectionModelModelTrainingResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiAnomalyDetectionModelModelTrainingResultsToHclTerraform(struct?: AiAnomalyDetectionModelModelTrainingResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiAnomalyDetectionModelModelTrainingResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiAnomalyDetectionModelModelTrainingResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiAnomalyDetectionModelModelTrainingResults | undefined) {
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
  private _rowReductionDetails = new AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList(this, "row_reduction_details", false);
  public get rowReductionDetails() {
    return this._rowReductionDetails;
  }

  // signal_details - computed: true, optional: false, required: false
  private _signalDetails = new AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList(this, "signal_details", false);
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

export class AiAnomalyDetectionModelModelTrainingResultsList extends cdktf.ComplexList {

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
  public get(index: number): AiAnomalyDetectionModelModelTrainingResultsOutputReference {
    return new AiAnomalyDetectionModelModelTrainingResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiAnomalyDetectionModelModelTrainingDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#algorithm_hint AiAnomalyDetectionModel#algorithm_hint}
  */
  readonly algorithmHint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#data_asset_ids AiAnomalyDetectionModel#data_asset_ids}
  */
  readonly dataAssetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#target_fap AiAnomalyDetectionModel#target_fap}
  */
  readonly targetFap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#training_fraction AiAnomalyDetectionModel#training_fraction}
  */
  readonly trainingFraction?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#window_size AiAnomalyDetectionModel#window_size}
  */
  readonly windowSize?: number;
}

export function aiAnomalyDetectionModelModelTrainingDetailsToTerraform(struct?: AiAnomalyDetectionModelModelTrainingDetailsOutputReference | AiAnomalyDetectionModelModelTrainingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm_hint: cdktf.stringToTerraform(struct!.algorithmHint),
    data_asset_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataAssetIds),
    target_fap: cdktf.numberToTerraform(struct!.targetFap),
    training_fraction: cdktf.numberToTerraform(struct!.trainingFraction),
    window_size: cdktf.numberToTerraform(struct!.windowSize),
  }
}


export function aiAnomalyDetectionModelModelTrainingDetailsToHclTerraform(struct?: AiAnomalyDetectionModelModelTrainingDetailsOutputReference | AiAnomalyDetectionModelModelTrainingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm_hint: {
      value: cdktf.stringToHclTerraform(struct!.algorithmHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_asset_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataAssetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_fap: {
      value: cdktf.numberToHclTerraform(struct!.targetFap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    training_fraction: {
      value: cdktf.numberToHclTerraform(struct!.trainingFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_size: {
      value: cdktf.numberToHclTerraform(struct!.windowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiAnomalyDetectionModelModelTrainingDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiAnomalyDetectionModelModelTrainingDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmHint = this._algorithmHint;
    }
    if (this._dataAssetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAssetIds = this._dataAssetIds;
    }
    if (this._targetFap !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFap = this._targetFap;
    }
    if (this._trainingFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingFraction = this._trainingFraction;
    }
    if (this._windowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiAnomalyDetectionModelModelTrainingDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithmHint = undefined;
      this._dataAssetIds = undefined;
      this._targetFap = undefined;
      this._trainingFraction = undefined;
      this._windowSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithmHint = value.algorithmHint;
      this._dataAssetIds = value.dataAssetIds;
      this._targetFap = value.targetFap;
      this._trainingFraction = value.trainingFraction;
      this._windowSize = value.windowSize;
    }
  }

  // algorithm_hint - computed: true, optional: true, required: false
  private _algorithmHint?: string; 
  public get algorithmHint() {
    return this.getStringAttribute('algorithm_hint');
  }
  public set algorithmHint(value: string) {
    this._algorithmHint = value;
  }
  public resetAlgorithmHint() {
    this._algorithmHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmHintInput() {
    return this._algorithmHint;
  }

  // data_asset_ids - computed: false, optional: false, required: true
  private _dataAssetIds?: string[]; 
  public get dataAssetIds() {
    return this.getListAttribute('data_asset_ids');
  }
  public set dataAssetIds(value: string[]) {
    this._dataAssetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAssetIdsInput() {
    return this._dataAssetIds;
  }

  // target_fap - computed: true, optional: true, required: false
  private _targetFap?: number; 
  public get targetFap() {
    return this.getNumberAttribute('target_fap');
  }
  public set targetFap(value: number) {
    this._targetFap = value;
  }
  public resetTargetFap() {
    this._targetFap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFapInput() {
    return this._targetFap;
  }

  // training_fraction - computed: true, optional: true, required: false
  private _trainingFraction?: number; 
  public get trainingFraction() {
    return this.getNumberAttribute('training_fraction');
  }
  public set trainingFraction(value: number) {
    this._trainingFraction = value;
  }
  public resetTrainingFraction() {
    this._trainingFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingFractionInput() {
    return this._trainingFraction;
  }

  // window_size - computed: true, optional: true, required: false
  private _windowSize?: number; 
  public get windowSize() {
    return this.getNumberAttribute('window_size');
  }
  public set windowSize(value: number) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }
}
export interface AiAnomalyDetectionModelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#create AiAnomalyDetectionModel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#delete AiAnomalyDetectionModel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#update AiAnomalyDetectionModel#update}
  */
  readonly update?: string;
}

export function aiAnomalyDetectionModelTimeoutsToTerraform(struct?: AiAnomalyDetectionModelTimeouts | cdktf.IResolvable): any {
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


export function aiAnomalyDetectionModelTimeoutsToHclTerraform(struct?: AiAnomalyDetectionModelTimeouts | cdktf.IResolvable): any {
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

export class AiAnomalyDetectionModelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiAnomalyDetectionModelTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AiAnomalyDetectionModelTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model oci_ai_anomaly_detection_model}
*/
export class AiAnomalyDetectionModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_anomaly_detection_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiAnomalyDetectionModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiAnomalyDetectionModel to import
  * @param importFromId The id of the existing AiAnomalyDetectionModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiAnomalyDetectionModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_anomaly_detection_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_model oci_ai_anomaly_detection_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiAnomalyDetectionModelConfig
  */
  public constructor(scope: Construct, id: string, config: AiAnomalyDetectionModelConfig) {
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._projectId = config.projectId;
    this._modelTrainingDetails.internalValue = config.modelTrainingDetails;
    this._timeouts.internalValue = config.timeouts;
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

  // model_training_results - computed: true, optional: false, required: false
  private _modelTrainingResults = new AiAnomalyDetectionModelModelTrainingResultsList(this, "model_training_results", false);
  public get modelTrainingResults() {
    return this._modelTrainingResults;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // model_training_details - computed: false, optional: false, required: true
  private _modelTrainingDetails = new AiAnomalyDetectionModelModelTrainingDetailsOutputReference(this, "model_training_details");
  public get modelTrainingDetails() {
    return this._modelTrainingDetails;
  }
  public putModelTrainingDetails(value: AiAnomalyDetectionModelModelTrainingDetails) {
    this._modelTrainingDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTrainingDetailsInput() {
    return this._modelTrainingDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AiAnomalyDetectionModelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AiAnomalyDetectionModelTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      model_training_details: aiAnomalyDetectionModelModelTrainingDetailsToTerraform(this._modelTrainingDetails.internalValue),
      timeouts: aiAnomalyDetectionModelTimeoutsToTerraform(this._timeouts.internalValue),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_training_details: {
        value: aiAnomalyDetectionModelModelTrainingDetailsToHclTerraform(this._modelTrainingDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiAnomalyDetectionModelModelTrainingDetailsList",
      },
      timeouts: {
        value: aiAnomalyDetectionModelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiAnomalyDetectionModelTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
