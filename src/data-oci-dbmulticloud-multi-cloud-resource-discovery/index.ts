// https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/dbmulticloud_multi_cloud_resource_discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDbmulticloudMultiCloudResourceDiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/dbmulticloud_multi_cloud_resource_discovery#multi_cloud_resource_discovery_id DataOciDbmulticloudMultiCloudResourceDiscovery#multi_cloud_resource_discovery_id}
  */
  readonly multiCloudResourceDiscoveryId: string;
}
export interface DataOciDbmulticloudMultiCloudResourceDiscoveryResources {
}

export function dataOciDbmulticloudMultiCloudResourceDiscoveryResourcesToTerraform(struct?: DataOciDbmulticloudMultiCloudResourceDiscoveryResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDbmulticloudMultiCloudResourceDiscoveryResourcesToHclTerraform(struct?: DataOciDbmulticloudMultiCloudResourceDiscoveryResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDbmulticloudMultiCloudResourceDiscoveryResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDbmulticloudMultiCloudResourceDiscoveryResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDbmulticloudMultiCloudResourceDiscoveryResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDbmulticloudMultiCloudResourceDiscoveryResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDbmulticloudMultiCloudResourceDiscoveryResourcesOutputReference {
    return new DataOciDbmulticloudMultiCloudResourceDiscoveryResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/dbmulticloud_multi_cloud_resource_discovery oci_dbmulticloud_multi_cloud_resource_discovery}
*/
export class DataOciDbmulticloudMultiCloudResourceDiscovery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dbmulticloud_multi_cloud_resource_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDbmulticloudMultiCloudResourceDiscovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDbmulticloudMultiCloudResourceDiscovery to import
  * @param importFromId The id of the existing DataOciDbmulticloudMultiCloudResourceDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/dbmulticloud_multi_cloud_resource_discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDbmulticloudMultiCloudResourceDiscovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dbmulticloud_multi_cloud_resource_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/dbmulticloud_multi_cloud_resource_discovery oci_dbmulticloud_multi_cloud_resource_discovery} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDbmulticloudMultiCloudResourceDiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDbmulticloudMultiCloudResourceDiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dbmulticloud_multi_cloud_resource_discovery',
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
    this._multiCloudResourceDiscoveryId = config.multiCloudResourceDiscoveryId;
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

  // last_modification - computed: true, optional: false, required: false
  public get lastModification() {
    return this.getStringAttribute('last_modification');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // multi_cloud_resource_discovery_id - computed: false, optional: false, required: true
  private _multiCloudResourceDiscoveryId?: string; 
  public get multiCloudResourceDiscoveryId() {
    return this.getStringAttribute('multi_cloud_resource_discovery_id');
  }
  public set multiCloudResourceDiscoveryId(value: string) {
    this._multiCloudResourceDiscoveryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiCloudResourceDiscoveryIdInput() {
    return this._multiCloudResourceDiscoveryId;
  }

  // oracle_db_connector_id - computed: true, optional: false, required: false
  public get oracleDbConnectorId() {
    return this.getStringAttribute('oracle_db_connector_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataOciDbmulticloudMultiCloudResourceDiscoveryResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // resources_filter - computed: true, optional: false, required: false
  private _resourcesFilter = new cdktf.StringMap(this, "resources_filter");
  public get resourcesFilter() {
    return this._resourcesFilter;
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
      multi_cloud_resource_discovery_id: cdktf.stringToTerraform(this._multiCloudResourceDiscoveryId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      multi_cloud_resource_discovery_id: {
        value: cdktf.stringToHclTerraform(this._multiCloudResourceDiscoveryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
