// https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/data_safe_unset_user_assessment_baseline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeUnsetUserAssessmentBaselineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/data_safe_unset_user_assessment_baseline#id DataSafeUnsetUserAssessmentBaseline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/data_safe_unset_user_assessment_baseline#target_ids DataSafeUnsetUserAssessmentBaseline#target_ids}
  */
  readonly targetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/data_safe_unset_user_assessment_baseline#user_assessment_id DataSafeUnsetUserAssessmentBaseline#user_assessment_id}
  */
  readonly userAssessmentId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/data_safe_unset_user_assessment_baseline#timeouts DataSafeUnsetUserAssessmentBaseline#timeouts}
  */
  readonly timeouts?: DataSafeUnsetUserAssessmentBaselineTimeouts;
}
export interface DataSafeUnsetUserAssessmentBaselineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/data_safe_unset_user_assessment_baseline#create DataSafeUnsetUserAssessmentBaseline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/data_safe_unset_user_assessment_baseline#delete DataSafeUnsetUserAssessmentBaseline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/data_safe_unset_user_assessment_baseline#update DataSafeUnsetUserAssessmentBaseline#update}
  */
  readonly update?: string;
}

export function dataSafeUnsetUserAssessmentBaselineTimeoutsToTerraform(struct?: DataSafeUnsetUserAssessmentBaselineTimeouts | cdktf.IResolvable): any {
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


export function dataSafeUnsetUserAssessmentBaselineTimeoutsToHclTerraform(struct?: DataSafeUnsetUserAssessmentBaselineTimeouts | cdktf.IResolvable): any {
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

export class DataSafeUnsetUserAssessmentBaselineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeUnsetUserAssessmentBaselineTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeUnsetUserAssessmentBaselineTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/data_safe_unset_user_assessment_baseline oci_data_safe_unset_user_assessment_baseline}
*/
export class DataSafeUnsetUserAssessmentBaseline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_unset_user_assessment_baseline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeUnsetUserAssessmentBaseline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeUnsetUserAssessmentBaseline to import
  * @param importFromId The id of the existing DataSafeUnsetUserAssessmentBaseline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/data_safe_unset_user_assessment_baseline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeUnsetUserAssessmentBaseline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_unset_user_assessment_baseline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/data_safe_unset_user_assessment_baseline oci_data_safe_unset_user_assessment_baseline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeUnsetUserAssessmentBaselineConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeUnsetUserAssessmentBaselineConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_unset_user_assessment_baseline',
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
    this._id = config.id;
    this._targetIds = config.targetIds;
    this._userAssessmentId = config.userAssessmentId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // target_ids - computed: false, optional: true, required: false
  private _targetIds?: string[]; 
  public get targetIds() {
    return this.getListAttribute('target_ids');
  }
  public set targetIds(value: string[]) {
    this._targetIds = value;
  }
  public resetTargetIds() {
    this._targetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdsInput() {
    return this._targetIds;
  }

  // user_assessment_id - computed: false, optional: false, required: true
  private _userAssessmentId?: string; 
  public get userAssessmentId() {
    return this.getStringAttribute('user_assessment_id');
  }
  public set userAssessmentId(value: string) {
    this._userAssessmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssessmentIdInput() {
    return this._userAssessmentId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeUnsetUserAssessmentBaselineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeUnsetUserAssessmentBaselineTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      target_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetIds),
      user_assessment_id: cdktf.stringToTerraform(this._userAssessmentId),
      timeouts: dataSafeUnsetUserAssessmentBaselineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_assessment_id: {
        value: cdktf.stringToHclTerraform(this._userAssessmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataSafeUnsetUserAssessmentBaselineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeUnsetUserAssessmentBaselineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
