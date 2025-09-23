// https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_data_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAiAnomalyDetectionDataAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_data_asset#data_asset_id DataOciAiAnomalyDetectionDataAsset#data_asset_id}
  */
  readonly dataAssetId: string;
}
export interface DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails {
}

export function dataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsToTerraform(struct?: DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsToHclTerraform(struct?: DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails | undefined) {
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

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // influx_version - computed: true, optional: false, required: false
  public get influxVersion() {
    return this.getStringAttribute('influx_version');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // retention_policy_name - computed: true, optional: false, required: false
  public get retentionPolicyName() {
    return this.getStringAttribute('retention_policy_name');
  }
}

export class DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference {
    return new DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiAnomalyDetectionDataAssetDataSourceDetails {
}

export function dataOciAiAnomalyDetectionDataAssetDataSourceDetailsToTerraform(struct?: DataOciAiAnomalyDetectionDataAssetDataSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiAnomalyDetectionDataAssetDataSourceDetailsToHclTerraform(struct?: DataOciAiAnomalyDetectionDataAssetDataSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiAnomalyDetectionDataAssetDataSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiAnomalyDetectionDataAssetDataSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // atp_password_secret_id - computed: true, optional: false, required: false
  public get atpPasswordSecretId() {
    return this.getStringAttribute('atp_password_secret_id');
  }

  // atp_user_name - computed: true, optional: false, required: false
  public get atpUserName() {
    return this.getStringAttribute('atp_user_name');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // cwallet_file_secret_id - computed: true, optional: false, required: false
  public get cwalletFileSecretId() {
    return this.getStringAttribute('cwallet_file_secret_id');
  }

  // data_source_type - computed: true, optional: false, required: false
  public get dataSourceType() {
    return this.getStringAttribute('data_source_type');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // ewallet_file_secret_id - computed: true, optional: false, required: false
  public get ewalletFileSecretId() {
    return this.getStringAttribute('ewallet_file_secret_id');
  }

  // key_store_file_secret_id - computed: true, optional: false, required: false
  public get keyStoreFileSecretId() {
    return this.getStringAttribute('key_store_file_secret_id');
  }

  // measurement_name - computed: true, optional: false, required: false
  public get measurementName() {
    return this.getStringAttribute('measurement_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // ojdbc_file_secret_id - computed: true, optional: false, required: false
  public get ojdbcFileSecretId() {
    return this.getStringAttribute('ojdbc_file_secret_id');
  }

  // password_secret_id - computed: true, optional: false, required: false
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // tnsnames_file_secret_id - computed: true, optional: false, required: false
  public get tnsnamesFileSecretId() {
    return this.getStringAttribute('tnsnames_file_secret_id');
  }

  // truststore_file_secret_id - computed: true, optional: false, required: false
  public get truststoreFileSecretId() {
    return this.getStringAttribute('truststore_file_secret_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // version_specific_details - computed: true, optional: false, required: false
  private _versionSpecificDetails = new DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList(this, "version_specific_details", false);
  public get versionSpecificDetails() {
    return this._versionSpecificDetails;
  }

  // wallet_password_secret_id - computed: true, optional: false, required: false
  public get walletPasswordSecretId() {
    return this.getStringAttribute('wallet_password_secret_id');
  }
}

export class DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference {
    return new DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_data_asset oci_ai_anomaly_detection_data_asset}
*/
export class DataOciAiAnomalyDetectionDataAsset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_anomaly_detection_data_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciAiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciAiAnomalyDetectionDataAsset to import
  * @param importFromId The id of the existing DataOciAiAnomalyDetectionDataAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_data_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciAiAnomalyDetectionDataAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_anomaly_detection_data_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/ai_anomaly_detection_data_asset oci_ai_anomaly_detection_data_asset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAiAnomalyDetectionDataAssetConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAiAnomalyDetectionDataAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ai_anomaly_detection_data_asset',
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
    this._dataAssetId = config.dataAssetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // data_asset_id - computed: false, optional: false, required: true
  private _dataAssetId?: string; 
  public get dataAssetId() {
    return this.getStringAttribute('data_asset_id');
  }
  public set dataAssetId(value: string) {
    this._dataAssetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAssetIdInput() {
    return this._dataAssetId;
  }

  // data_source_details - computed: true, optional: false, required: false
  private _dataSourceDetails = new DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList(this, "data_source_details", false);
  public get dataSourceDetails() {
    return this._dataSourceDetails;
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

  // private_endpoint_id - computed: true, optional: false, required: false
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
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
      data_asset_id: cdktf.stringToTerraform(this._dataAssetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_asset_id: {
        value: cdktf.stringToHclTerraform(this._dataAssetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
