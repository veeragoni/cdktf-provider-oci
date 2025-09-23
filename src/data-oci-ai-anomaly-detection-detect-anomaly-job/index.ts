// https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAiAnomalyDetectionDetectAnomalyJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_job#detect_anomaly_job_id DataOciAiAnomalyDetectionDetectAnomalyJob#detect_anomaly_job_id}
  */
  readonly detectAnomalyJobId: string;
}
export interface DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData {
}

export function dataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataToTerraform(struct?: DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataToHclTerraform(struct?: DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getNumberListAttribute('values');
  }
}

export class DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference {
    return new DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations {
}

export function dataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsToTerraform(struct?: DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsToHclTerraform(struct?: DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export class DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference {
    return new DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails {
}

export function dataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsToTerraform(struct?: DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsToHclTerraform(struct?: DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // input_type - computed: true, optional: false, required: false
  public get inputType() {
    return this.getStringAttribute('input_type');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // object_locations - computed: true, optional: false, required: false
  private _objectLocations = new DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList(this, "object_locations", false);
  public get objectLocations() {
    return this._objectLocations;
  }

  // signal_names - computed: true, optional: false, required: false
  public get signalNames() {
    return this.getListAttribute('signal_names');
  }
}

export class DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference {
    return new DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails {
}

export function dataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsToTerraform(struct?: DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsToHclTerraform(struct?: DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // output_type - computed: true, optional: false, required: false
  public get outputType() {
    return this.getStringAttribute('output_type');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference {
    return new DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_job oci_ai_anomaly_detection_detect_anomaly_job}
*/
export class DataOciAiAnomalyDetectionDetectAnomalyJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_anomaly_detection_detect_anomaly_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciAiAnomalyDetectionDetectAnomalyJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciAiAnomalyDetectionDetectAnomalyJob to import
  * @param importFromId The id of the existing DataOciAiAnomalyDetectionDetectAnomalyJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciAiAnomalyDetectionDetectAnomalyJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_anomaly_detection_detect_anomaly_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_job oci_ai_anomaly_detection_detect_anomaly_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAiAnomalyDetectionDetectAnomalyJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAiAnomalyDetectionDetectAnomalyJobConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ai_anomaly_detection_detect_anomaly_job',
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
    this._detectAnomalyJobId = config.detectAnomalyJobId;
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

  // detect_anomaly_job_id - computed: false, optional: false, required: true
  private _detectAnomalyJobId?: string; 
  public get detectAnomalyJobId() {
    return this.getStringAttribute('detect_anomaly_job_id');
  }
  public set detectAnomalyJobId(value: string) {
    this._detectAnomalyJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectAnomalyJobIdInput() {
    return this._detectAnomalyJobId;
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

  // input_details - computed: true, optional: false, required: false
  private _inputDetails = new DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList(this, "input_details", false);
  public get inputDetails() {
    return this._inputDetails;
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }

  // output_details - computed: true, optional: false, required: false
  private _outputDetails = new DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList(this, "output_details", false);
  public get outputDetails() {
    return this._outputDetails;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // sensitivity - computed: true, optional: false, required: false
  public get sensitivity() {
    return this.getNumberAttribute('sensitivity');
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

  // time_accepted - computed: true, optional: false, required: false
  public get timeAccepted() {
    return this.getStringAttribute('time_accepted');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      detect_anomaly_job_id: cdktf.stringToTerraform(this._detectAnomalyJobId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      detect_anomaly_job_id: {
        value: cdktf.stringToHclTerraform(this._detectAnomalyJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
