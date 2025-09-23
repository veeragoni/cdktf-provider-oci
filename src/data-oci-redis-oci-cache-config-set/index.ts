// https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/redis_oci_cache_config_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciRedisOciCacheConfigSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/redis_oci_cache_config_set#oci_cache_config_set_id DataOciRedisOciCacheConfigSet#oci_cache_config_set_id}
  */
  readonly ociCacheConfigSetId: string;
}
export interface DataOciRedisOciCacheConfigSetConfigurationDetailsItems {
}

export function dataOciRedisOciCacheConfigSetConfigurationDetailsItemsToTerraform(struct?: DataOciRedisOciCacheConfigSetConfigurationDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciRedisOciCacheConfigSetConfigurationDetailsItemsToHclTerraform(struct?: DataOciRedisOciCacheConfigSetConfigurationDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciRedisOciCacheConfigSetConfigurationDetailsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciRedisOciCacheConfigSetConfigurationDetailsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciRedisOciCacheConfigSetConfigurationDetailsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_key - computed: true, optional: false, required: false
  public get configKey() {
    return this.getStringAttribute('config_key');
  }

  // config_value - computed: true, optional: false, required: false
  public get configValue() {
    return this.getStringAttribute('config_value');
  }
}

export class DataOciRedisOciCacheConfigSetConfigurationDetailsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciRedisOciCacheConfigSetConfigurationDetailsItemsOutputReference {
    return new DataOciRedisOciCacheConfigSetConfigurationDetailsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciRedisOciCacheConfigSetConfigurationDetails {
}

export function dataOciRedisOciCacheConfigSetConfigurationDetailsToTerraform(struct?: DataOciRedisOciCacheConfigSetConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciRedisOciCacheConfigSetConfigurationDetailsToHclTerraform(struct?: DataOciRedisOciCacheConfigSetConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciRedisOciCacheConfigSetConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciRedisOciCacheConfigSetConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciRedisOciCacheConfigSetConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciRedisOciCacheConfigSetConfigurationDetailsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciRedisOciCacheConfigSetConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciRedisOciCacheConfigSetConfigurationDetailsOutputReference {
    return new DataOciRedisOciCacheConfigSetConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/redis_oci_cache_config_set oci_redis_oci_cache_config_set}
*/
export class DataOciRedisOciCacheConfigSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_redis_oci_cache_config_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciRedisOciCacheConfigSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciRedisOciCacheConfigSet to import
  * @param importFromId The id of the existing DataOciRedisOciCacheConfigSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/redis_oci_cache_config_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciRedisOciCacheConfigSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_redis_oci_cache_config_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/redis_oci_cache_config_set oci_redis_oci_cache_config_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciRedisOciCacheConfigSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciRedisOciCacheConfigSetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_redis_oci_cache_config_set',
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
    this._ociCacheConfigSetId = config.ociCacheConfigSetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // configuration_details - computed: true, optional: false, required: false
  private _configurationDetails = new DataOciRedisOciCacheConfigSetConfigurationDetailsList(this, "configuration_details", false);
  public get configurationDetails() {
    return this._configurationDetails;
  }

  // default_config_set_id - computed: true, optional: false, required: false
  public get defaultConfigSetId() {
    return this.getStringAttribute('default_config_set_id');
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

  // oci_cache_config_set_id - computed: false, optional: false, required: true
  private _ociCacheConfigSetId?: string; 
  public get ociCacheConfigSetId() {
    return this.getStringAttribute('oci_cache_config_set_id');
  }
  public set ociCacheConfigSetId(value: string) {
    this._ociCacheConfigSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ociCacheConfigSetIdInput() {
    return this._ociCacheConfigSetId;
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
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
      oci_cache_config_set_id: cdktf.stringToTerraform(this._ociCacheConfigSetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      oci_cache_config_set_id: {
        value: cdktf.stringToHclTerraform(this._ociCacheConfigSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
