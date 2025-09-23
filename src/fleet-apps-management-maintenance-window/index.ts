// https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetAppsManagementMaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#compartment_id FleetAppsManagementMaintenanceWindow#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#defined_tags FleetAppsManagementMaintenanceWindow#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#description FleetAppsManagementMaintenanceWindow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#display_name FleetAppsManagementMaintenanceWindow#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#duration FleetAppsManagementMaintenanceWindow#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#freeform_tags FleetAppsManagementMaintenanceWindow#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#id FleetAppsManagementMaintenanceWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#is_outage FleetAppsManagementMaintenanceWindow#is_outage}
  */
  readonly isOutage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#is_recurring FleetAppsManagementMaintenanceWindow#is_recurring}
  */
  readonly isRecurring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#recurrences FleetAppsManagementMaintenanceWindow#recurrences}
  */
  readonly recurrences?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#time_schedule_start FleetAppsManagementMaintenanceWindow#time_schedule_start}
  */
  readonly timeScheduleStart: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#timeouts FleetAppsManagementMaintenanceWindow#timeouts}
  */
  readonly timeouts?: FleetAppsManagementMaintenanceWindowTimeouts;
}
export interface FleetAppsManagementMaintenanceWindowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#create FleetAppsManagementMaintenanceWindow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#delete FleetAppsManagementMaintenanceWindow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#update FleetAppsManagementMaintenanceWindow#update}
  */
  readonly update?: string;
}

export function fleetAppsManagementMaintenanceWindowTimeoutsToTerraform(struct?: FleetAppsManagementMaintenanceWindowTimeouts | cdktf.IResolvable): any {
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


export function fleetAppsManagementMaintenanceWindowTimeoutsToHclTerraform(struct?: FleetAppsManagementMaintenanceWindowTimeouts | cdktf.IResolvable): any {
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

export class FleetAppsManagementMaintenanceWindowTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetAppsManagementMaintenanceWindowTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementMaintenanceWindowTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window oci_fleet_apps_management_maintenance_window}
*/
export class FleetAppsManagementMaintenanceWindow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_maintenance_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetAppsManagementMaintenanceWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetAppsManagementMaintenanceWindow to import
  * @param importFromId The id of the existing FleetAppsManagementMaintenanceWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetAppsManagementMaintenanceWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_maintenance_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/fleet_apps_management_maintenance_window oci_fleet_apps_management_maintenance_window} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetAppsManagementMaintenanceWindowConfig
  */
  public constructor(scope: Construct, id: string, config: FleetAppsManagementMaintenanceWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_maintenance_window',
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._duration = config.duration;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isOutage = config.isOutage;
    this._isRecurring = config.isRecurring;
    this._recurrences = config.recurrences;
    this._timeScheduleStart = config.timeScheduleStart;
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

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // is_outage - computed: true, optional: true, required: false
  private _isOutage?: boolean | cdktf.IResolvable; 
  public get isOutage() {
    return this.getBooleanAttribute('is_outage');
  }
  public set isOutage(value: boolean | cdktf.IResolvable) {
    this._isOutage = value;
  }
  public resetIsOutage() {
    this._isOutage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOutageInput() {
    return this._isOutage;
  }

  // is_recurring - computed: true, optional: true, required: false
  private _isRecurring?: boolean | cdktf.IResolvable; 
  public get isRecurring() {
    return this.getBooleanAttribute('is_recurring');
  }
  public set isRecurring(value: boolean | cdktf.IResolvable) {
    this._isRecurring = value;
  }
  public resetIsRecurring() {
    this._isRecurring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRecurringInput() {
    return this._isRecurring;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // recurrences - computed: true, optional: true, required: false
  private _recurrences?: string; 
  public get recurrences() {
    return this.getStringAttribute('recurrences');
  }
  public set recurrences(value: string) {
    this._recurrences = value;
  }
  public resetRecurrences() {
    this._recurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrencesInput() {
    return this._recurrences;
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
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

  // time_schedule_start - computed: false, optional: false, required: true
  private _timeScheduleStart?: string; 
  public get timeScheduleStart() {
    return this.getStringAttribute('time_schedule_start');
  }
  public set timeScheduleStart(value: string) {
    this._timeScheduleStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeScheduleStartInput() {
    return this._timeScheduleStart;
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FleetAppsManagementMaintenanceWindowTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FleetAppsManagementMaintenanceWindowTimeouts) {
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
      duration: cdktf.stringToTerraform(this._duration),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_outage: cdktf.booleanToTerraform(this._isOutage),
      is_recurring: cdktf.booleanToTerraform(this._isRecurring),
      recurrences: cdktf.stringToTerraform(this._recurrences),
      time_schedule_start: cdktf.stringToTerraform(this._timeScheduleStart),
      timeouts: fleetAppsManagementMaintenanceWindowTimeoutsToTerraform(this._timeouts.internalValue),
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
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
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
      is_outage: {
        value: cdktf.booleanToHclTerraform(this._isOutage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_recurring: {
        value: cdktf.booleanToHclTerraform(this._isRecurring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recurrences: {
        value: cdktf.stringToHclTerraform(this._recurrences),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_schedule_start: {
        value: cdktf.stringToHclTerraform(this._timeScheduleStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: fleetAppsManagementMaintenanceWindowTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetAppsManagementMaintenanceWindowTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
