// https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiAnomalyDetectionDataAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#compartment_id AiAnomalyDetectionDataAsset#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#defined_tags AiAnomalyDetectionDataAsset#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#description AiAnomalyDetectionDataAsset#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#display_name AiAnomalyDetectionDataAsset#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#freeform_tags AiAnomalyDetectionDataAsset#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#id AiAnomalyDetectionDataAsset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#private_endpoint_id AiAnomalyDetectionDataAsset#private_endpoint_id}
  */
  readonly privateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#project_id AiAnomalyDetectionDataAsset#project_id}
  */
  readonly projectId: string;
  /**
  * data_source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#data_source_details AiAnomalyDetectionDataAsset#data_source_details}
  */
  readonly dataSourceDetails: AiAnomalyDetectionDataAssetDataSourceDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#timeouts AiAnomalyDetectionDataAsset#timeouts}
  */
  readonly timeouts?: AiAnomalyDetectionDataAssetTimeouts;
}
export interface AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#influx_version AiAnomalyDetectionDataAsset#influx_version}
  */
  readonly influxVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#organization_name AiAnomalyDetectionDataAsset#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#retention_policy_name AiAnomalyDetectionDataAsset#retention_policy_name}
  */
  readonly retentionPolicyName?: string;
}

export function aiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsToTerraform(struct?: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference | AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    influx_version: cdktf.stringToTerraform(struct!.influxVersion),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    retention_policy_name: cdktf.stringToTerraform(struct!.retentionPolicyName),
  }
}


export function aiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsToHclTerraform(struct?: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference | AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails): any {
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
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    influx_version: {
      value: cdktf.stringToHclTerraform(struct!.influxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_name: {
      value: cdktf.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.retentionPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._influxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxVersion = this._influxVersion;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._retentionPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicyName = this._retentionPolicyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._databaseName = undefined;
      this._influxVersion = undefined;
      this._organizationName = undefined;
      this._retentionPolicyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._databaseName = value.databaseName;
      this._influxVersion = value.influxVersion;
      this._organizationName = value.organizationName;
      this._retentionPolicyName = value.retentionPolicyName;
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

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // influx_version - computed: false, optional: false, required: true
  private _influxVersion?: string; 
  public get influxVersion() {
    return this.getStringAttribute('influx_version');
  }
  public set influxVersion(value: string) {
    this._influxVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get influxVersionInput() {
    return this._influxVersion;
  }

  // organization_name - computed: true, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // retention_policy_name - computed: true, optional: true, required: false
  private _retentionPolicyName?: string; 
  public get retentionPolicyName() {
    return this.getStringAttribute('retention_policy_name');
  }
  public set retentionPolicyName(value: string) {
    this._retentionPolicyName = value;
  }
  public resetRetentionPolicyName() {
    this._retentionPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyNameInput() {
    return this._retentionPolicyName;
  }
}
export interface AiAnomalyDetectionDataAssetDataSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#atp_password_secret_id AiAnomalyDetectionDataAsset#atp_password_secret_id}
  */
  readonly atpPasswordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#atp_user_name AiAnomalyDetectionDataAsset#atp_user_name}
  */
  readonly atpUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#cwallet_file_secret_id AiAnomalyDetectionDataAsset#cwallet_file_secret_id}
  */
  readonly cwalletFileSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#data_source_type AiAnomalyDetectionDataAsset#data_source_type}
  */
  readonly dataSourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#ewallet_file_secret_id AiAnomalyDetectionDataAsset#ewallet_file_secret_id}
  */
  readonly ewalletFileSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#key_store_file_secret_id AiAnomalyDetectionDataAsset#key_store_file_secret_id}
  */
  readonly keyStoreFileSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#measurement_name AiAnomalyDetectionDataAsset#measurement_name}
  */
  readonly measurementName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#namespace AiAnomalyDetectionDataAsset#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#object AiAnomalyDetectionDataAsset#object}
  */
  readonly object?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#ojdbc_file_secret_id AiAnomalyDetectionDataAsset#ojdbc_file_secret_id}
  */
  readonly ojdbcFileSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#password_secret_id AiAnomalyDetectionDataAsset#password_secret_id}
  */
  readonly passwordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#table_name AiAnomalyDetectionDataAsset#table_name}
  */
  readonly tableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#tnsnames_file_secret_id AiAnomalyDetectionDataAsset#tnsnames_file_secret_id}
  */
  readonly tnsnamesFileSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#truststore_file_secret_id AiAnomalyDetectionDataAsset#truststore_file_secret_id}
  */
  readonly truststoreFileSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#url AiAnomalyDetectionDataAsset#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#user_name AiAnomalyDetectionDataAsset#user_name}
  */
  readonly userName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#wallet_password_secret_id AiAnomalyDetectionDataAsset#wallet_password_secret_id}
  */
  readonly walletPasswordSecretId?: string;
  /**
  * version_specific_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#version_specific_details AiAnomalyDetectionDataAsset#version_specific_details}
  */
  readonly versionSpecificDetails?: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails;
}

export function aiAnomalyDetectionDataAssetDataSourceDetailsToTerraform(struct?: AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference | AiAnomalyDetectionDataAssetDataSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    atp_password_secret_id: cdktf.stringToTerraform(struct!.atpPasswordSecretId),
    atp_user_name: cdktf.stringToTerraform(struct!.atpUserName),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    cwallet_file_secret_id: cdktf.stringToTerraform(struct!.cwalletFileSecretId),
    data_source_type: cdktf.stringToTerraform(struct!.dataSourceType),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    ewallet_file_secret_id: cdktf.stringToTerraform(struct!.ewalletFileSecretId),
    key_store_file_secret_id: cdktf.stringToTerraform(struct!.keyStoreFileSecretId),
    measurement_name: cdktf.stringToTerraform(struct!.measurementName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object: cdktf.stringToTerraform(struct!.object),
    ojdbc_file_secret_id: cdktf.stringToTerraform(struct!.ojdbcFileSecretId),
    password_secret_id: cdktf.stringToTerraform(struct!.passwordSecretId),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    tnsnames_file_secret_id: cdktf.stringToTerraform(struct!.tnsnamesFileSecretId),
    truststore_file_secret_id: cdktf.stringToTerraform(struct!.truststoreFileSecretId),
    url: cdktf.stringToTerraform(struct!.url),
    user_name: cdktf.stringToTerraform(struct!.userName),
    wallet_password_secret_id: cdktf.stringToTerraform(struct!.walletPasswordSecretId),
    version_specific_details: aiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsToTerraform(struct!.versionSpecificDetails),
  }
}


export function aiAnomalyDetectionDataAssetDataSourceDetailsToHclTerraform(struct?: AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference | AiAnomalyDetectionDataAssetDataSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    atp_password_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.atpPasswordSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    atp_user_name: {
      value: cdktf.stringToHclTerraform(struct!.atpUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cwallet_file_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.cwalletFileSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source_type: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ewallet_file_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.ewalletFileSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_file_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.keyStoreFileSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measurement_name: {
      value: cdktf.stringToHclTerraform(struct!.measurementName),
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
    ojdbc_file_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.ojdbcFileSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tnsnames_file_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.tnsnamesFileSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    truststore_file_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.truststoreFileSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_password_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.walletPasswordSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_specific_details: {
      value: aiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsToHclTerraform(struct!.versionSpecificDetails),
      isBlock: true,
      type: "list",
      storageClassType: "AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiAnomalyDetectionDataAssetDataSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atpPasswordSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.atpPasswordSecretId = this._atpPasswordSecretId;
    }
    if (this._atpUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.atpUserName = this._atpUserName;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._cwalletFileSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cwalletFileSecretId = this._cwalletFileSecretId;
    }
    if (this._dataSourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceType = this._dataSourceType;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._ewalletFileSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewalletFileSecretId = this._ewalletFileSecretId;
    }
    if (this._keyStoreFileSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStoreFileSecretId = this._keyStoreFileSecretId;
    }
    if (this._measurementName !== undefined) {
      hasAnyValues = true;
      internalValueResult.measurementName = this._measurementName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._ojdbcFileSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ojdbcFileSecretId = this._ojdbcFileSecretId;
    }
    if (this._passwordSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretId = this._passwordSecretId;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._tnsnamesFileSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tnsnamesFileSecretId = this._tnsnamesFileSecretId;
    }
    if (this._truststoreFileSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.truststoreFileSecretId = this._truststoreFileSecretId;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._walletPasswordSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletPasswordSecretId = this._walletPasswordSecretId;
    }
    if (this._versionSpecificDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionSpecificDetails = this._versionSpecificDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiAnomalyDetectionDataAssetDataSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._atpPasswordSecretId = undefined;
      this._atpUserName = undefined;
      this._bucket = undefined;
      this._cwalletFileSecretId = undefined;
      this._dataSourceType = undefined;
      this._databaseName = undefined;
      this._ewalletFileSecretId = undefined;
      this._keyStoreFileSecretId = undefined;
      this._measurementName = undefined;
      this._namespace = undefined;
      this._object = undefined;
      this._ojdbcFileSecretId = undefined;
      this._passwordSecretId = undefined;
      this._tableName = undefined;
      this._tnsnamesFileSecretId = undefined;
      this._truststoreFileSecretId = undefined;
      this._url = undefined;
      this._userName = undefined;
      this._walletPasswordSecretId = undefined;
      this._versionSpecificDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._atpPasswordSecretId = value.atpPasswordSecretId;
      this._atpUserName = value.atpUserName;
      this._bucket = value.bucket;
      this._cwalletFileSecretId = value.cwalletFileSecretId;
      this._dataSourceType = value.dataSourceType;
      this._databaseName = value.databaseName;
      this._ewalletFileSecretId = value.ewalletFileSecretId;
      this._keyStoreFileSecretId = value.keyStoreFileSecretId;
      this._measurementName = value.measurementName;
      this._namespace = value.namespace;
      this._object = value.object;
      this._ojdbcFileSecretId = value.ojdbcFileSecretId;
      this._passwordSecretId = value.passwordSecretId;
      this._tableName = value.tableName;
      this._tnsnamesFileSecretId = value.tnsnamesFileSecretId;
      this._truststoreFileSecretId = value.truststoreFileSecretId;
      this._url = value.url;
      this._userName = value.userName;
      this._walletPasswordSecretId = value.walletPasswordSecretId;
      this._versionSpecificDetails.internalValue = value.versionSpecificDetails;
    }
  }

  // atp_password_secret_id - computed: true, optional: true, required: false
  private _atpPasswordSecretId?: string; 
  public get atpPasswordSecretId() {
    return this.getStringAttribute('atp_password_secret_id');
  }
  public set atpPasswordSecretId(value: string) {
    this._atpPasswordSecretId = value;
  }
  public resetAtpPasswordSecretId() {
    this._atpPasswordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atpPasswordSecretIdInput() {
    return this._atpPasswordSecretId;
  }

  // atp_user_name - computed: true, optional: true, required: false
  private _atpUserName?: string; 
  public get atpUserName() {
    return this.getStringAttribute('atp_user_name');
  }
  public set atpUserName(value: string) {
    this._atpUserName = value;
  }
  public resetAtpUserName() {
    this._atpUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atpUserNameInput() {
    return this._atpUserName;
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

  // cwallet_file_secret_id - computed: true, optional: true, required: false
  private _cwalletFileSecretId?: string; 
  public get cwalletFileSecretId() {
    return this.getStringAttribute('cwallet_file_secret_id');
  }
  public set cwalletFileSecretId(value: string) {
    this._cwalletFileSecretId = value;
  }
  public resetCwalletFileSecretId() {
    this._cwalletFileSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cwalletFileSecretIdInput() {
    return this._cwalletFileSecretId;
  }

  // data_source_type - computed: false, optional: false, required: true
  private _dataSourceType?: string; 
  public get dataSourceType() {
    return this.getStringAttribute('data_source_type');
  }
  public set dataSourceType(value: string) {
    this._dataSourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceTypeInput() {
    return this._dataSourceType;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // ewallet_file_secret_id - computed: true, optional: true, required: false
  private _ewalletFileSecretId?: string; 
  public get ewalletFileSecretId() {
    return this.getStringAttribute('ewallet_file_secret_id');
  }
  public set ewalletFileSecretId(value: string) {
    this._ewalletFileSecretId = value;
  }
  public resetEwalletFileSecretId() {
    this._ewalletFileSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewalletFileSecretIdInput() {
    return this._ewalletFileSecretId;
  }

  // key_store_file_secret_id - computed: true, optional: true, required: false
  private _keyStoreFileSecretId?: string; 
  public get keyStoreFileSecretId() {
    return this.getStringAttribute('key_store_file_secret_id');
  }
  public set keyStoreFileSecretId(value: string) {
    this._keyStoreFileSecretId = value;
  }
  public resetKeyStoreFileSecretId() {
    this._keyStoreFileSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreFileSecretIdInput() {
    return this._keyStoreFileSecretId;
  }

  // measurement_name - computed: true, optional: true, required: false
  private _measurementName?: string; 
  public get measurementName() {
    return this.getStringAttribute('measurement_name');
  }
  public set measurementName(value: string) {
    this._measurementName = value;
  }
  public resetMeasurementName() {
    this._measurementName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measurementNameInput() {
    return this._measurementName;
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

  // ojdbc_file_secret_id - computed: true, optional: true, required: false
  private _ojdbcFileSecretId?: string; 
  public get ojdbcFileSecretId() {
    return this.getStringAttribute('ojdbc_file_secret_id');
  }
  public set ojdbcFileSecretId(value: string) {
    this._ojdbcFileSecretId = value;
  }
  public resetOjdbcFileSecretId() {
    this._ojdbcFileSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ojdbcFileSecretIdInput() {
    return this._ojdbcFileSecretId;
  }

  // password_secret_id - computed: true, optional: true, required: false
  private _passwordSecretId?: string; 
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }
  public set passwordSecretId(value: string) {
    this._passwordSecretId = value;
  }
  public resetPasswordSecretId() {
    this._passwordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretIdInput() {
    return this._passwordSecretId;
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // tnsnames_file_secret_id - computed: true, optional: true, required: false
  private _tnsnamesFileSecretId?: string; 
  public get tnsnamesFileSecretId() {
    return this.getStringAttribute('tnsnames_file_secret_id');
  }
  public set tnsnamesFileSecretId(value: string) {
    this._tnsnamesFileSecretId = value;
  }
  public resetTnsnamesFileSecretId() {
    this._tnsnamesFileSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tnsnamesFileSecretIdInput() {
    return this._tnsnamesFileSecretId;
  }

  // truststore_file_secret_id - computed: true, optional: true, required: false
  private _truststoreFileSecretId?: string; 
  public get truststoreFileSecretId() {
    return this.getStringAttribute('truststore_file_secret_id');
  }
  public set truststoreFileSecretId(value: string) {
    this._truststoreFileSecretId = value;
  }
  public resetTruststoreFileSecretId() {
    this._truststoreFileSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreFileSecretIdInput() {
    return this._truststoreFileSecretId;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // wallet_password_secret_id - computed: true, optional: true, required: false
  private _walletPasswordSecretId?: string; 
  public get walletPasswordSecretId() {
    return this.getStringAttribute('wallet_password_secret_id');
  }
  public set walletPasswordSecretId(value: string) {
    this._walletPasswordSecretId = value;
  }
  public resetWalletPasswordSecretId() {
    this._walletPasswordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletPasswordSecretIdInput() {
    return this._walletPasswordSecretId;
  }

  // version_specific_details - computed: false, optional: true, required: false
  private _versionSpecificDetails = new AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference(this, "version_specific_details");
  public get versionSpecificDetails() {
    return this._versionSpecificDetails;
  }
  public putVersionSpecificDetails(value: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails) {
    this._versionSpecificDetails.internalValue = value;
  }
  public resetVersionSpecificDetails() {
    this._versionSpecificDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionSpecificDetailsInput() {
    return this._versionSpecificDetails.internalValue;
  }
}
export interface AiAnomalyDetectionDataAssetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#create AiAnomalyDetectionDataAsset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#delete AiAnomalyDetectionDataAsset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#update AiAnomalyDetectionDataAsset#update}
  */
  readonly update?: string;
}

export function aiAnomalyDetectionDataAssetTimeoutsToTerraform(struct?: AiAnomalyDetectionDataAssetTimeouts | cdktf.IResolvable): any {
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


export function aiAnomalyDetectionDataAssetTimeoutsToHclTerraform(struct?: AiAnomalyDetectionDataAssetTimeouts | cdktf.IResolvable): any {
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

export class AiAnomalyDetectionDataAssetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiAnomalyDetectionDataAssetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AiAnomalyDetectionDataAssetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset oci_ai_anomaly_detection_data_asset}
*/
export class AiAnomalyDetectionDataAsset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_anomaly_detection_data_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiAnomalyDetectionDataAsset to import
  * @param importFromId The id of the existing AiAnomalyDetectionDataAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiAnomalyDetectionDataAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_anomaly_detection_data_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/resources/ai_anomaly_detection_data_asset oci_ai_anomaly_detection_data_asset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiAnomalyDetectionDataAssetConfig
  */
  public constructor(scope: Construct, id: string, config: AiAnomalyDetectionDataAssetConfig) {
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._privateEndpointId = config.privateEndpointId;
    this._projectId = config.projectId;
    this._dataSourceDetails.internalValue = config.dataSourceDetails;
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

  // private_endpoint_id - computed: true, optional: true, required: false
  private _privateEndpointId?: string; 
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }
  public resetPrivateEndpointId() {
    this._privateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdInput() {
    return this._privateEndpointId;
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

  // data_source_details - computed: false, optional: false, required: true
  private _dataSourceDetails = new AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference(this, "data_source_details");
  public get dataSourceDetails() {
    return this._dataSourceDetails;
  }
  public putDataSourceDetails(value: AiAnomalyDetectionDataAssetDataSourceDetails) {
    this._dataSourceDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceDetailsInput() {
    return this._dataSourceDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AiAnomalyDetectionDataAssetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AiAnomalyDetectionDataAssetTimeouts) {
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
      private_endpoint_id: cdktf.stringToTerraform(this._privateEndpointId),
      project_id: cdktf.stringToTerraform(this._projectId),
      data_source_details: aiAnomalyDetectionDataAssetDataSourceDetailsToTerraform(this._dataSourceDetails.internalValue),
      timeouts: aiAnomalyDetectionDataAssetTimeoutsToTerraform(this._timeouts.internalValue),
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
      private_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._privateEndpointId),
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
      data_source_details: {
        value: aiAnomalyDetectionDataAssetDataSourceDetailsToHclTerraform(this._dataSourceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiAnomalyDetectionDataAssetDataSourceDetailsList",
      },
      timeouts: {
        value: aiAnomalyDetectionDataAssetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiAnomalyDetectionDataAssetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
