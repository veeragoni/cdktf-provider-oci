// https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#host_id DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#host_id}
  */
  readonly hostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#id DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#occ_handover_resource_block_id DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#occ_handover_resource_block_id}
  */
  readonly occHandoverResourceBlockId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#filter DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#filter}
  */
  readonly filter?: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter[] | cdktf.IResolvable;
}
export interface DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems {
}

export function dataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsToTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsToHclTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  private _details = new cdktf.StringMap(this, "details");
  public get details() {
    return this._details;
  }

  // occ_resource_handover_block_id - computed: true, optional: false, required: false
  public get occResourceHandoverBlockId() {
    return this.getStringAttribute('occ_resource_handover_block_id');
  }
}

export class DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference {
    return new DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection {
}

export function dataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionToTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionToHclTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference {
    return new DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#name DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#regex DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#values DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#values}
  */
  readonly values: string[];
}

export function dataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterToTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter | cdktf.IResolvable): any {
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


export function dataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterToHclTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter | cdktf.IResolvable): any {
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

export class DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference {
    return new DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details oci_capacity_management_internal_occ_handover_resource_block_details}
*/
export class DataOciCapacityManagementInternalOccHandoverResourceBlockDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_capacity_management_internal_occ_handover_resource_block_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCapacityManagementInternalOccHandoverResourceBlockDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCapacityManagementInternalOccHandoverResourceBlockDetails to import
  * @param importFromId The id of the existing DataOciCapacityManagementInternalOccHandoverResourceBlockDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCapacityManagementInternalOccHandoverResourceBlockDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_capacity_management_internal_occ_handover_resource_block_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.37.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details oci_capacity_management_internal_occ_handover_resource_block_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_capacity_management_internal_occ_handover_resource_block_details',
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
    this._hostId = config.hostId;
    this._id = config.id;
    this._occHandoverResourceBlockId = config.occHandoverResourceBlockId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_id - computed: false, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
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

  // occ_handover_resource_block_detail_collection - computed: true, optional: false, required: false
  private _occHandoverResourceBlockDetailCollection = new DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList(this, "occ_handover_resource_block_detail_collection", false);
  public get occHandoverResourceBlockDetailCollection() {
    return this._occHandoverResourceBlockDetailCollection;
  }

  // occ_handover_resource_block_id - computed: false, optional: false, required: true
  private _occHandoverResourceBlockId?: string; 
  public get occHandoverResourceBlockId() {
    return this.getStringAttribute('occ_handover_resource_block_id');
  }
  public set occHandoverResourceBlockId(value: string) {
    this._occHandoverResourceBlockId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occHandoverResourceBlockIdInput() {
    return this._occHandoverResourceBlockId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter[] | cdktf.IResolvable) {
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
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
      occ_handover_resource_block_id: cdktf.stringToTerraform(this._occHandoverResourceBlockId),
      filter: cdktf.listMapper(dataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
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
      occ_handover_resource_block_id: {
        value: cdktf.stringToHclTerraform(this._occHandoverResourceBlockId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
