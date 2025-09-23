// https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiAnomalyDetectionDetectAnomalyJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#compartment_id AiAnomalyDetectionDetectAnomalyJob#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#description AiAnomalyDetectionDetectAnomalyJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#display_name AiAnomalyDetectionDetectAnomalyJob#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#id AiAnomalyDetectionDetectAnomalyJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#model_id AiAnomalyDetectionDetectAnomalyJob#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#sensitivity AiAnomalyDetectionDetectAnomalyJob#sensitivity}
  */
  readonly sensitivity?: number;
  /**
  * input_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_details AiAnomalyDetectionDetectAnomalyJob#input_details}
  */
  readonly inputDetails: AiAnomalyDetectionDetectAnomalyJobInputDetails;
  /**
  * output_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_details AiAnomalyDetectionDetectAnomalyJob#output_details}
  */
  readonly outputDetails: AiAnomalyDetectionDetectAnomalyJobOutputDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timeouts AiAnomalyDetectionDetectAnomalyJob#timeouts}
  */
  readonly timeouts?: AiAnomalyDetectionDetectAnomalyJobTimeouts;
}
export interface AiAnomalyDetectionDetectAnomalyJobInputDetailsData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timestamp AiAnomalyDetectionDetectAnomalyJob#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#values AiAnomalyDetectionDetectAnomalyJob#values}
  */
  readonly values?: number[];
}

export function aiAnomalyDetectionDetectAnomalyJobInputDetailsDataToTerraform(struct?: AiAnomalyDetectionDetectAnomalyJobInputDetailsData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.values),
  }
}


export function aiAnomalyDetectionDetectAnomalyJobInputDetailsDataToHclTerraform(struct?: AiAnomalyDetectionDetectAnomalyJobInputDetailsData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiAnomalyDetectionDetectAnomalyJobInputDetailsData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiAnomalyDetectionDetectAnomalyJobInputDetailsData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timestamp = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timestamp = value.timestamp;
      this._values = value.values;
    }
  }

  // timestamp - computed: true, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // values - computed: true, optional: true, required: false
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList extends cdktf.ComplexList {
  public internalValue? : AiAnomalyDetectionDetectAnomalyJobInputDetailsData[] | cdktf.IResolvable

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
  public get(index: number): AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference {
    return new AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#object AiAnomalyDetectionDetectAnomalyJob#object}
  */
  readonly object?: string;
}

export function aiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsToTerraform(struct?: AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function aiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsToHclTerraform(struct?: AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._namespace = undefined;
      this._object = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._namespace = value.namespace;
      this._object = value.object;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}

export class AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList extends cdktf.ComplexList {
  public internalValue? : AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations[] | cdktf.IResolvable

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
  public get(index: number): AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference {
    return new AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiAnomalyDetectionDetectAnomalyJobInputDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content AiAnomalyDetectionDetectAnomalyJob#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content_type AiAnomalyDetectionDetectAnomalyJob#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_type AiAnomalyDetectionDetectAnomalyJob#input_type}
  */
  readonly inputType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#signal_names AiAnomalyDetectionDetectAnomalyJob#signal_names}
  */
  readonly signalNames?: string[];
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#data AiAnomalyDetectionDetectAnomalyJob#data}
  */
  readonly data?: AiAnomalyDetectionDetectAnomalyJobInputDetailsData[] | cdktf.IResolvable;
  /**
  * object_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#object_locations AiAnomalyDetectionDetectAnomalyJob#object_locations}
  */
  readonly objectLocations?: AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations[] | cdktf.IResolvable;
}

export function aiAnomalyDetectionDetectAnomalyJobInputDetailsToTerraform(struct?: AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference | AiAnomalyDetectionDetectAnomalyJobInputDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    input_type: cdktf.stringToTerraform(struct!.inputType),
    signal_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.signalNames),
    data: cdktf.listMapper(aiAnomalyDetectionDetectAnomalyJobInputDetailsDataToTerraform, true)(struct!.data),
    object_locations: cdktf.listMapper(aiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsToTerraform, true)(struct!.objectLocations),
  }
}


export function aiAnomalyDetectionDetectAnomalyJobInputDetailsToHclTerraform(struct?: AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference | AiAnomalyDetectionDetectAnomalyJobInputDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_type: {
      value: cdktf.stringToHclTerraform(struct!.inputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signal_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.signalNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data: {
      value: cdktf.listMapperHcl(aiAnomalyDetectionDetectAnomalyJobInputDetailsDataToHclTerraform, true)(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList",
    },
    object_locations: {
      value: cdktf.listMapperHcl(aiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsToHclTerraform, true)(struct!.objectLocations),
      isBlock: true,
      type: "list",
      storageClassType: "AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiAnomalyDetectionDetectAnomalyJobInputDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._inputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputType = this._inputType;
    }
    if (this._signalNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.signalNames = this._signalNames;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._objectLocations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectLocations = this._objectLocations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiAnomalyDetectionDetectAnomalyJobInputDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._contentType = undefined;
      this._inputType = undefined;
      this._signalNames = undefined;
      this._data.internalValue = undefined;
      this._objectLocations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._contentType = value.contentType;
      this._inputType = value.inputType;
      this._signalNames = value.signalNames;
      this._data.internalValue = value.data;
      this._objectLocations.internalValue = value.objectLocations;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // input_type - computed: false, optional: false, required: true
  private _inputType?: string; 
  public get inputType() {
    return this.getStringAttribute('input_type');
  }
  public set inputType(value: string) {
    this._inputType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTypeInput() {
    return this._inputType;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // signal_names - computed: true, optional: true, required: false
  private _signalNames?: string[]; 
  public get signalNames() {
    return this.getListAttribute('signal_names');
  }
  public set signalNames(value: string[]) {
    this._signalNames = value;
  }
  public resetSignalNames() {
    this._signalNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalNamesInput() {
    return this._signalNames;
  }

  // data - computed: false, optional: true, required: false
  private _data = new AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: AiAnomalyDetectionDetectAnomalyJobInputDetailsData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // object_locations - computed: false, optional: true, required: false
  private _objectLocations = new AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList(this, "object_locations", false);
  public get objectLocations() {
    return this._objectLocations;
  }
  public putObjectLocations(value: AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations[] | cdktf.IResolvable) {
    this._objectLocations.internalValue = value;
  }
  public resetObjectLocations() {
    this._objectLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLocationsInput() {
    return this._objectLocations.internalValue;
  }
}
export interface AiAnomalyDetectionDetectAnomalyJobOutputDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_type AiAnomalyDetectionDetectAnomalyJob#output_type}
  */
  readonly outputType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#prefix AiAnomalyDetectionDetectAnomalyJob#prefix}
  */
  readonly prefix?: string;
}

export function aiAnomalyDetectionDetectAnomalyJobOutputDetailsToTerraform(struct?: AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference | AiAnomalyDetectionDetectAnomalyJobOutputDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    output_type: cdktf.stringToTerraform(struct!.outputType),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function aiAnomalyDetectionDetectAnomalyJobOutputDetailsToHclTerraform(struct?: AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference | AiAnomalyDetectionDetectAnomalyJobOutputDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_type: {
      value: cdktf.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiAnomalyDetectionDetectAnomalyJobOutputDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiAnomalyDetectionDetectAnomalyJobOutputDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._namespace = undefined;
      this._outputType = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._namespace = value.namespace;
      this._outputType = value.outputType;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // output_type - computed: false, optional: false, required: true
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AiAnomalyDetectionDetectAnomalyJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#create AiAnomalyDetectionDetectAnomalyJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#delete AiAnomalyDetectionDetectAnomalyJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#update AiAnomalyDetectionDetectAnomalyJob#update}
  */
  readonly update?: string;
}

export function aiAnomalyDetectionDetectAnomalyJobTimeoutsToTerraform(struct?: AiAnomalyDetectionDetectAnomalyJobTimeouts | cdktf.IResolvable): any {
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


export function aiAnomalyDetectionDetectAnomalyJobTimeoutsToHclTerraform(struct?: AiAnomalyDetectionDetectAnomalyJobTimeouts | cdktf.IResolvable): any {
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

export class AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiAnomalyDetectionDetectAnomalyJobTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AiAnomalyDetectionDetectAnomalyJobTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job oci_ai_anomaly_detection_detect_anomaly_job}
*/
export class AiAnomalyDetectionDetectAnomalyJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_anomaly_detection_detect_anomaly_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiAnomalyDetectionDetectAnomalyJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiAnomalyDetectionDetectAnomalyJob to import
  * @param importFromId The id of the existing AiAnomalyDetectionDetectAnomalyJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiAnomalyDetectionDetectAnomalyJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_anomaly_detection_detect_anomaly_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_detect_anomaly_job oci_ai_anomaly_detection_detect_anomaly_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiAnomalyDetectionDetectAnomalyJobConfig
  */
  public constructor(scope: Construct, id: string, config: AiAnomalyDetectionDetectAnomalyJobConfig) {
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
    this._compartmentId = config.compartmentId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._modelId = config.modelId;
    this._sensitivity = config.sensitivity;
    this._inputDetails.internalValue = config.inputDetails;
    this._outputDetails.internalValue = config.outputDetails;
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

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
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

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // sensitivity - computed: true, optional: true, required: false
  private _sensitivity?: number; 
  public get sensitivity() {
    return this.getNumberAttribute('sensitivity');
  }
  public set sensitivity(value: number) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
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

  // input_details - computed: false, optional: false, required: true
  private _inputDetails = new AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference(this, "input_details");
  public get inputDetails() {
    return this._inputDetails;
  }
  public putInputDetails(value: AiAnomalyDetectionDetectAnomalyJobInputDetails) {
    this._inputDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDetailsInput() {
    return this._inputDetails.internalValue;
  }

  // output_details - computed: false, optional: false, required: true
  private _outputDetails = new AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference(this, "output_details");
  public get outputDetails() {
    return this._outputDetails;
  }
  public putOutputDetails(value: AiAnomalyDetectionDetectAnomalyJobOutputDetails) {
    this._outputDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDetailsInput() {
    return this._outputDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AiAnomalyDetectionDetectAnomalyJobTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      model_id: cdktf.stringToTerraform(this._modelId),
      sensitivity: cdktf.numberToTerraform(this._sensitivity),
      input_details: aiAnomalyDetectionDetectAnomalyJobInputDetailsToTerraform(this._inputDetails.internalValue),
      output_details: aiAnomalyDetectionDetectAnomalyJobOutputDetailsToTerraform(this._outputDetails.internalValue),
      timeouts: aiAnomalyDetectionDetectAnomalyJobTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_id: {
        value: cdktf.stringToHclTerraform(this._modelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitivity: {
        value: cdktf.numberToHclTerraform(this._sensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      input_details: {
        value: aiAnomalyDetectionDetectAnomalyJobInputDetailsToHclTerraform(this._inputDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiAnomalyDetectionDetectAnomalyJobInputDetailsList",
      },
      output_details: {
        value: aiAnomalyDetectionDetectAnomalyJobOutputDetailsToHclTerraform(this._outputDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiAnomalyDetectionDetectAnomalyJobOutputDetailsList",
      },
      timeouts: {
        value: aiAnomalyDetectionDetectAnomalyJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiAnomalyDetectionDetectAnomalyJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
