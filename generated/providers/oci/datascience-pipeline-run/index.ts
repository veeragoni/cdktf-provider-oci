// https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasciencePipelineRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#compartment_id DatasciencePipelineRun#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#defined_tags DatasciencePipelineRun#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#delete_related_job_runs DatasciencePipelineRun#delete_related_job_runs}
  */
  readonly deleteRelatedJobRuns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#display_name DatasciencePipelineRun#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#freeform_tags DatasciencePipelineRun#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#id DatasciencePipelineRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#opc_parent_rpt_url DatasciencePipelineRun#opc_parent_rpt_url}
  */
  readonly opcParentRptUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#pipeline_id DatasciencePipelineRun#pipeline_id}
  */
  readonly pipelineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#project_id DatasciencePipelineRun#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#system_tags DatasciencePipelineRun#system_tags}
  */
  readonly systemTags?: { [key: string]: string };
  /**
  * configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#configuration_override_details DatasciencePipelineRun#configuration_override_details}
  */
  readonly configurationOverrideDetails?: DatasciencePipelineRunConfigurationOverrideDetails;
  /**
  * infrastructure_configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#infrastructure_configuration_override_details DatasciencePipelineRun#infrastructure_configuration_override_details}
  */
  readonly infrastructureConfigurationOverrideDetails?: DatasciencePipelineRunInfrastructureConfigurationOverrideDetails;
  /**
  * log_configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#log_configuration_override_details DatasciencePipelineRun#log_configuration_override_details}
  */
  readonly logConfigurationOverrideDetails?: DatasciencePipelineRunLogConfigurationOverrideDetails;
  /**
  * step_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#step_override_details DatasciencePipelineRun#step_override_details}
  */
  readonly stepOverrideDetails?: DatasciencePipelineRunStepOverrideDetails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#timeouts DatasciencePipelineRun#timeouts}
  */
  readonly timeouts?: DatasciencePipelineRunTimeouts;
}
export interface DatasciencePipelineRunConfigurationDetails {
}

export function datasciencePipelineRunConfigurationDetailsToTerraform(struct?: DatasciencePipelineRunConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datasciencePipelineRunConfigurationDetailsToHclTerraform(struct?: DatasciencePipelineRunConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatasciencePipelineRunConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasciencePipelineRunConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineRunConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_line_arguments - computed: true, optional: false, required: false
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktf.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // maximum_runtime_in_minutes - computed: true, optional: false, required: false
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DatasciencePipelineRunConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatasciencePipelineRunConfigurationDetailsOutputReference {
    return new DatasciencePipelineRunConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasciencePipelineRunLogDetails {
}

export function datasciencePipelineRunLogDetailsToTerraform(struct?: DatasciencePipelineRunLogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datasciencePipelineRunLogDetailsToHclTerraform(struct?: DatasciencePipelineRunLogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatasciencePipelineRunLogDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasciencePipelineRunLogDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineRunLogDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // log_id - computed: true, optional: false, required: false
  public get logId() {
    return this.getStringAttribute('log_id');
  }
}

export class DatasciencePipelineRunLogDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatasciencePipelineRunLogDetailsOutputReference {
    return new DatasciencePipelineRunLogDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasciencePipelineRunStepRuns {
}

export function datasciencePipelineRunStepRunsToTerraform(struct?: DatasciencePipelineRunStepRuns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datasciencePipelineRunStepRunsToHclTerraform(struct?: DatasciencePipelineRunStepRuns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatasciencePipelineRunStepRunsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasciencePipelineRunStepRuns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineRunStepRuns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataflow_run_id - computed: true, optional: false, required: false
  public get dataflowRunId() {
    return this.getStringAttribute('dataflow_run_id');
  }

  // job_run_id - computed: true, optional: false, required: false
  public get jobRunId() {
    return this.getStringAttribute('job_run_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }

  // step_type - computed: true, optional: false, required: false
  public get stepType() {
    return this.getStringAttribute('step_type');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }
}

export class DatasciencePipelineRunStepRunsList extends cdktf.ComplexList {

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
  public get(index: number): DatasciencePipelineRunStepRunsOutputReference {
    return new DatasciencePipelineRunStepRunsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasciencePipelineRunConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}
  */
  readonly commandLineArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}
  */
  readonly maximumRuntimeInMinutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#type DatasciencePipelineRun#type}
  */
  readonly type: string;
}

export function datasciencePipelineRunConfigurationOverrideDetailsToTerraform(struct?: DatasciencePipelineRunConfigurationOverrideDetailsOutputReference | DatasciencePipelineRunConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line_arguments: cdktf.stringToTerraform(struct!.commandLineArguments),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    maximum_runtime_in_minutes: cdktf.stringToTerraform(struct!.maximumRuntimeInMinutes),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function datasciencePipelineRunConfigurationOverrideDetailsToHclTerraform(struct?: DatasciencePipelineRunConfigurationOverrideDetailsOutputReference | DatasciencePipelineRunConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_line_arguments: {
      value: cdktf.stringToHclTerraform(struct!.commandLineArguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    maximum_runtime_in_minutes: {
      value: cdktf.stringToHclTerraform(struct!.maximumRuntimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasciencePipelineRunConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineRunConfigurationOverrideDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandLineArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandLineArguments = this._commandLineArguments;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._maximumRuntimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRuntimeInMinutes = this._maximumRuntimeInMinutes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineRunConfigurationOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandLineArguments = undefined;
      this._environmentVariables = undefined;
      this._maximumRuntimeInMinutes = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandLineArguments = value.commandLineArguments;
      this._environmentVariables = value.environmentVariables;
      this._maximumRuntimeInMinutes = value.maximumRuntimeInMinutes;
      this._type = value.type;
    }
  }

  // command_line_arguments - computed: true, optional: true, required: false
  private _commandLineArguments?: string; 
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }
  public set commandLineArguments(value: string) {
    this._commandLineArguments = value;
  }
  public resetCommandLineArguments() {
    this._commandLineArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineArgumentsInput() {
    return this._commandLineArguments;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // maximum_runtime_in_minutes - computed: true, optional: true, required: false
  private _maximumRuntimeInMinutes?: string; 
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }
  public set maximumRuntimeInMinutes(value: string) {
    this._maximumRuntimeInMinutes = value;
  }
  public resetMaximumRuntimeInMinutes() {
    this._maximumRuntimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRuntimeInMinutesInput() {
    return this._maximumRuntimeInMinutes;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#memory_in_gbs DatasciencePipelineRun#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#ocpus DatasciencePipelineRun#ocpus}
  */
  readonly ocpus?: number;
}

export function datasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetailsToTerraform(struct?: DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetailsOutputReference | DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function datasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetailsToHclTerraform(struct?: DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetailsOutputReference | DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DatasciencePipelineRunInfrastructureConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#block_storage_size_in_gbs DatasciencePipelineRun#block_storage_size_in_gbs}
  */
  readonly blockStorageSizeInGbs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#shape_name DatasciencePipelineRun#shape_name}
  */
  readonly shapeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#subnet_id DatasciencePipelineRun#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * shape_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#shape_config_details DatasciencePipelineRun#shape_config_details}
  */
  readonly shapeConfigDetails?: DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetails;
}

export function datasciencePipelineRunInfrastructureConfigurationOverrideDetailsToTerraform(struct?: DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsOutputReference | DatasciencePipelineRunInfrastructureConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_size_in_gbs: cdktf.numberToTerraform(struct!.blockStorageSizeInGbs),
    shape_name: cdktf.stringToTerraform(struct!.shapeName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    shape_config_details: datasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetailsToTerraform(struct!.shapeConfigDetails),
  }
}


export function datasciencePipelineRunInfrastructureConfigurationOverrideDetailsToHclTerraform(struct?: DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsOutputReference | DatasciencePipelineRunInfrastructureConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_storage_size_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.blockStorageSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape_name: {
      value: cdktf.stringToHclTerraform(struct!.shapeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape_config_details: {
      value: datasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetailsToHclTerraform(struct!.shapeConfigDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineRunInfrastructureConfigurationOverrideDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorageSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageSizeInGbs = this._blockStorageSizeInGbs;
    }
    if (this._shapeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeName = this._shapeName;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._shapeConfigDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeConfigDetails = this._shapeConfigDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineRunInfrastructureConfigurationOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockStorageSizeInGbs = undefined;
      this._shapeName = undefined;
      this._subnetId = undefined;
      this._shapeConfigDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockStorageSizeInGbs = value.blockStorageSizeInGbs;
      this._shapeName = value.shapeName;
      this._subnetId = value.subnetId;
      this._shapeConfigDetails.internalValue = value.shapeConfigDetails;
    }
  }

  // block_storage_size_in_gbs - computed: false, optional: false, required: true
  private _blockStorageSizeInGbs?: number; 
  public get blockStorageSizeInGbs() {
    return this.getNumberAttribute('block_storage_size_in_gbs');
  }
  public set blockStorageSizeInGbs(value: number) {
    this._blockStorageSizeInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageSizeInGbsInput() {
    return this._blockStorageSizeInGbs;
  }

  // shape_name - computed: false, optional: false, required: true
  private _shapeName?: string; 
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }
  public set shapeName(value: string) {
    this._shapeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeNameInput() {
    return this._shapeName;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // shape_config_details - computed: false, optional: true, required: false
  private _shapeConfigDetails = new DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetailsOutputReference(this, "shape_config_details");
  public get shapeConfigDetails() {
    return this._shapeConfigDetails;
  }
  public putShapeConfigDetails(value: DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsShapeConfigDetails) {
    this._shapeConfigDetails.internalValue = value;
  }
  public resetShapeConfigDetails() {
    this._shapeConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigDetailsInput() {
    return this._shapeConfigDetails.internalValue;
  }
}
export interface DatasciencePipelineRunLogConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#enable_auto_log_creation DatasciencePipelineRun#enable_auto_log_creation}
  */
  readonly enableAutoLogCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#enable_logging DatasciencePipelineRun#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#log_group_id DatasciencePipelineRun#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#log_id DatasciencePipelineRun#log_id}
  */
  readonly logId?: string;
}

export function datasciencePipelineRunLogConfigurationOverrideDetailsToTerraform(struct?: DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference | DatasciencePipelineRunLogConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auto_log_creation: cdktf.booleanToTerraform(struct!.enableAutoLogCreation),
    enable_logging: cdktf.booleanToTerraform(struct!.enableLogging),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_id: cdktf.stringToTerraform(struct!.logId),
  }
}


export function datasciencePipelineRunLogConfigurationOverrideDetailsToHclTerraform(struct?: DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference | DatasciencePipelineRunLogConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_auto_log_creation: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoLogCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_id: {
      value: cdktf.stringToHclTerraform(struct!.logId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineRunLogConfigurationOverrideDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutoLogCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoLogCreation = this._enableAutoLogCreation;
    }
    if (this._enableLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogging = this._enableLogging;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._logId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logId = this._logId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineRunLogConfigurationOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAutoLogCreation = undefined;
      this._enableLogging = undefined;
      this._logGroupId = undefined;
      this._logId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAutoLogCreation = value.enableAutoLogCreation;
      this._enableLogging = value.enableLogging;
      this._logGroupId = value.logGroupId;
      this._logId = value.logId;
    }
  }

  // enable_auto_log_creation - computed: true, optional: true, required: false
  private _enableAutoLogCreation?: boolean | cdktf.IResolvable; 
  public get enableAutoLogCreation() {
    return this.getBooleanAttribute('enable_auto_log_creation');
  }
  public set enableAutoLogCreation(value: boolean | cdktf.IResolvable) {
    this._enableAutoLogCreation = value;
  }
  public resetEnableAutoLogCreation() {
    this._enableAutoLogCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoLogCreationInput() {
    return this._enableAutoLogCreation;
  }

  // enable_logging - computed: true, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // log_group_id - computed: true, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_id - computed: true, optional: true, required: false
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  public resetLogId() {
    this._logId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
  }
}
export interface DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}
  */
  readonly commandLineArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}
  */
  readonly maximumRuntimeInMinutes?: string;
}

export function datasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsToTerraform(struct?: DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference | DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line_arguments: cdktf.stringToTerraform(struct!.commandLineArguments),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    maximum_runtime_in_minutes: cdktf.stringToTerraform(struct!.maximumRuntimeInMinutes),
  }
}


export function datasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsToHclTerraform(struct?: DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference | DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_line_arguments: {
      value: cdktf.stringToHclTerraform(struct!.commandLineArguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    maximum_runtime_in_minutes: {
      value: cdktf.stringToHclTerraform(struct!.maximumRuntimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandLineArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandLineArguments = this._commandLineArguments;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._maximumRuntimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRuntimeInMinutes = this._maximumRuntimeInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandLineArguments = undefined;
      this._environmentVariables = undefined;
      this._maximumRuntimeInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandLineArguments = value.commandLineArguments;
      this._environmentVariables = value.environmentVariables;
      this._maximumRuntimeInMinutes = value.maximumRuntimeInMinutes;
    }
  }

  // command_line_arguments - computed: true, optional: true, required: false
  private _commandLineArguments?: string; 
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }
  public set commandLineArguments(value: string) {
    this._commandLineArguments = value;
  }
  public resetCommandLineArguments() {
    this._commandLineArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineArgumentsInput() {
    return this._commandLineArguments;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // maximum_runtime_in_minutes - computed: true, optional: true, required: false
  private _maximumRuntimeInMinutes?: string; 
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }
  public set maximumRuntimeInMinutes(value: string) {
    this._maximumRuntimeInMinutes = value;
  }
  public resetMaximumRuntimeInMinutes() {
    this._maximumRuntimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRuntimeInMinutesInput() {
    return this._maximumRuntimeInMinutes;
  }
}
export interface DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#cmd DatasciencePipelineRun#cmd}
  */
  readonly cmd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#container_type DatasciencePipelineRun#container_type}
  */
  readonly containerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#entrypoint DatasciencePipelineRun#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#image DatasciencePipelineRun#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#image_digest DatasciencePipelineRun#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#image_signature_id DatasciencePipelineRun#image_signature_id}
  */
  readonly imageSignatureId?: string;
}

export function datasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsToTerraform(struct?: DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference | DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cmd),
    container_type: cdktf.stringToTerraform(struct!.containerType),
    entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entrypoint),
    image: cdktf.stringToTerraform(struct!.image),
    image_digest: cdktf.stringToTerraform(struct!.imageDigest),
    image_signature_id: cdktf.stringToTerraform(struct!.imageSignatureId),
  }
}


export function datasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsToHclTerraform(struct?: DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference | DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cmd),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_type: {
      value: cdktf.stringToHclTerraform(struct!.containerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entrypoint: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_digest: {
      value: cdktf.stringToHclTerraform(struct!.imageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_signature_id: {
      value: cdktf.stringToHclTerraform(struct!.imageSignatureId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._containerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerType = this._containerType;
    }
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDigest = this._imageDigest;
    }
    if (this._imageSignatureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSignatureId = this._imageSignatureId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmd = undefined;
      this._containerType = undefined;
      this._entrypoint = undefined;
      this._image = undefined;
      this._imageDigest = undefined;
      this._imageSignatureId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmd = value.cmd;
      this._containerType = value.containerType;
      this._entrypoint = value.entrypoint;
      this._image = value.image;
      this._imageDigest = value.imageDigest;
      this._imageSignatureId = value.imageSignatureId;
    }
  }

  // cmd - computed: true, optional: true, required: false
  private _cmd?: string[]; 
  public get cmd() {
    return this.getListAttribute('cmd');
  }
  public set cmd(value: string[]) {
    this._cmd = value;
  }
  public resetCmd() {
    this._cmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
  }

  // container_type - computed: false, optional: false, required: true
  private _containerType?: string; 
  public get containerType() {
    return this.getStringAttribute('container_type');
  }
  public set containerType(value: string) {
    this._containerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerTypeInput() {
    return this._containerType;
  }

  // entrypoint - computed: true, optional: true, required: false
  private _entrypoint?: string[]; 
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }
  public set entrypoint(value: string[]) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_digest - computed: true, optional: true, required: false
  private _imageDigest?: string; 
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }
  public set imageDigest(value: string) {
    this._imageDigest = value;
  }
  public resetImageDigest() {
    this._imageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDigestInput() {
    return this._imageDigest;
  }

  // image_signature_id - computed: true, optional: true, required: false
  private _imageSignatureId?: string; 
  public get imageSignatureId() {
    return this.getStringAttribute('image_signature_id');
  }
  public set imageSignatureId(value: string) {
    this._imageSignatureId = value;
  }
  public resetImageSignatureId() {
    this._imageSignatureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSignatureIdInput() {
    return this._imageSignatureId;
  }
}
export interface DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#cpu_baseline DatasciencePipelineRun#cpu_baseline}
  */
  readonly cpuBaseline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#memory_in_gbs DatasciencePipelineRun#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#ocpus DatasciencePipelineRun#ocpus}
  */
  readonly ocpus?: number;
}

export function datasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsToTerraform(struct?: DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsOutputReference | DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_baseline: cdktf.stringToTerraform(struct!.cpuBaseline),
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function datasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsToHclTerraform(struct?: DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsOutputReference | DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_baseline: {
      value: cdktf.stringToHclTerraform(struct!.cpuBaseline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuBaseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuBaseline = this._cpuBaseline;
    }
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuBaseline = undefined;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuBaseline = value.cpuBaseline;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // cpu_baseline - computed: true, optional: true, required: false
  private _cpuBaseline?: string; 
  public get cpuBaseline() {
    return this.getStringAttribute('cpu_baseline');
  }
  public set cpuBaseline(value: string) {
    this._cpuBaseline = value;
  }
  public resetCpuBaseline() {
    this._cpuBaseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuBaselineInput() {
    return this._cpuBaseline;
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#cpu_baseline DatasciencePipelineRun#cpu_baseline}
  */
  readonly cpuBaseline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#memory_in_gbs DatasciencePipelineRun#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#ocpus DatasciencePipelineRun#ocpus}
  */
  readonly ocpus?: number;
}

export function datasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsToTerraform(struct?: DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsOutputReference | DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_baseline: cdktf.stringToTerraform(struct!.cpuBaseline),
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function datasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsToHclTerraform(struct?: DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsOutputReference | DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_baseline: {
      value: cdktf.stringToHclTerraform(struct!.cpuBaseline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuBaseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuBaseline = this._cpuBaseline;
    }
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuBaseline = undefined;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuBaseline = value.cpuBaseline;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // cpu_baseline - computed: true, optional: true, required: false
  private _cpuBaseline?: string; 
  public get cpuBaseline() {
    return this.getStringAttribute('cpu_baseline');
  }
  public set cpuBaseline(value: string) {
    this._cpuBaseline = value;
  }
  public resetCpuBaseline() {
    this._cpuBaseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuBaselineInput() {
    return this._cpuBaseline;
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#configuration DatasciencePipelineRun#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#driver_shape DatasciencePipelineRun#driver_shape}
  */
  readonly driverShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#executor_shape DatasciencePipelineRun#executor_shape}
  */
  readonly executorShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#logs_bucket_uri DatasciencePipelineRun#logs_bucket_uri}
  */
  readonly logsBucketUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#num_executors DatasciencePipelineRun#num_executors}
  */
  readonly numExecutors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#warehouse_bucket_uri DatasciencePipelineRun#warehouse_bucket_uri}
  */
  readonly warehouseBucketUri?: string;
  /**
  * driver_shape_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#driver_shape_config_details DatasciencePipelineRun#driver_shape_config_details}
  */
  readonly driverShapeConfigDetails?: DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetails;
  /**
  * executor_shape_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#executor_shape_config_details DatasciencePipelineRun#executor_shape_config_details}
  */
  readonly executorShapeConfigDetails?: DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetails;
}

export function datasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsToTerraform(struct?: DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsOutputReference | DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    driver_shape: cdktf.stringToTerraform(struct!.driverShape),
    executor_shape: cdktf.stringToTerraform(struct!.executorShape),
    logs_bucket_uri: cdktf.stringToTerraform(struct!.logsBucketUri),
    num_executors: cdktf.numberToTerraform(struct!.numExecutors),
    warehouse_bucket_uri: cdktf.stringToTerraform(struct!.warehouseBucketUri),
    driver_shape_config_details: datasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsToTerraform(struct!.driverShapeConfigDetails),
    executor_shape_config_details: datasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsToTerraform(struct!.executorShapeConfigDetails),
  }
}


export function datasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsToHclTerraform(struct?: DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsOutputReference | DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    driver_shape: {
      value: cdktf.stringToHclTerraform(struct!.driverShape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    executor_shape: {
      value: cdktf.stringToHclTerraform(struct!.executorShape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logs_bucket_uri: {
      value: cdktf.stringToHclTerraform(struct!.logsBucketUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_executors: {
      value: cdktf.numberToHclTerraform(struct!.numExecutors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warehouse_bucket_uri: {
      value: cdktf.stringToHclTerraform(struct!.warehouseBucketUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_shape_config_details: {
      value: datasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsToHclTerraform(struct!.driverShapeConfigDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsList",
    },
    executor_shape_config_details: {
      value: datasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsToHclTerraform(struct!.executorShapeConfigDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._driverShape !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverShape = this._driverShape;
    }
    if (this._executorShape !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorShape = this._executorShape;
    }
    if (this._logsBucketUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsBucketUri = this._logsBucketUri;
    }
    if (this._numExecutors !== undefined) {
      hasAnyValues = true;
      internalValueResult.numExecutors = this._numExecutors;
    }
    if (this._warehouseBucketUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseBucketUri = this._warehouseBucketUri;
    }
    if (this._driverShapeConfigDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverShapeConfigDetails = this._driverShapeConfigDetails?.internalValue;
    }
    if (this._executorShapeConfigDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorShapeConfigDetails = this._executorShapeConfigDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._driverShape = undefined;
      this._executorShape = undefined;
      this._logsBucketUri = undefined;
      this._numExecutors = undefined;
      this._warehouseBucketUri = undefined;
      this._driverShapeConfigDetails.internalValue = undefined;
      this._executorShapeConfigDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._driverShape = value.driverShape;
      this._executorShape = value.executorShape;
      this._logsBucketUri = value.logsBucketUri;
      this._numExecutors = value.numExecutors;
      this._warehouseBucketUri = value.warehouseBucketUri;
      this._driverShapeConfigDetails.internalValue = value.driverShapeConfigDetails;
      this._executorShapeConfigDetails.internalValue = value.executorShapeConfigDetails;
    }
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // driver_shape - computed: true, optional: true, required: false
  private _driverShape?: string; 
  public get driverShape() {
    return this.getStringAttribute('driver_shape');
  }
  public set driverShape(value: string) {
    this._driverShape = value;
  }
  public resetDriverShape() {
    this._driverShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverShapeInput() {
    return this._driverShape;
  }

  // executor_shape - computed: true, optional: true, required: false
  private _executorShape?: string; 
  public get executorShape() {
    return this.getStringAttribute('executor_shape');
  }
  public set executorShape(value: string) {
    this._executorShape = value;
  }
  public resetExecutorShape() {
    this._executorShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorShapeInput() {
    return this._executorShape;
  }

  // logs_bucket_uri - computed: true, optional: true, required: false
  private _logsBucketUri?: string; 
  public get logsBucketUri() {
    return this.getStringAttribute('logs_bucket_uri');
  }
  public set logsBucketUri(value: string) {
    this._logsBucketUri = value;
  }
  public resetLogsBucketUri() {
    this._logsBucketUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsBucketUriInput() {
    return this._logsBucketUri;
  }

  // num_executors - computed: true, optional: true, required: false
  private _numExecutors?: number; 
  public get numExecutors() {
    return this.getNumberAttribute('num_executors');
  }
  public set numExecutors(value: number) {
    this._numExecutors = value;
  }
  public resetNumExecutors() {
    this._numExecutors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numExecutorsInput() {
    return this._numExecutors;
  }

  // warehouse_bucket_uri - computed: true, optional: true, required: false
  private _warehouseBucketUri?: string; 
  public get warehouseBucketUri() {
    return this.getStringAttribute('warehouse_bucket_uri');
  }
  public set warehouseBucketUri(value: string) {
    this._warehouseBucketUri = value;
  }
  public resetWarehouseBucketUri() {
    this._warehouseBucketUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseBucketUriInput() {
    return this._warehouseBucketUri;
  }

  // driver_shape_config_details - computed: false, optional: true, required: false
  private _driverShapeConfigDetails = new DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsOutputReference(this, "driver_shape_config_details");
  public get driverShapeConfigDetails() {
    return this._driverShapeConfigDetails;
  }
  public putDriverShapeConfigDetails(value: DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetails) {
    this._driverShapeConfigDetails.internalValue = value;
  }
  public resetDriverShapeConfigDetails() {
    this._driverShapeConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverShapeConfigDetailsInput() {
    return this._driverShapeConfigDetails.internalValue;
  }

  // executor_shape_config_details - computed: false, optional: true, required: false
  private _executorShapeConfigDetails = new DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsOutputReference(this, "executor_shape_config_details");
  public get executorShapeConfigDetails() {
    return this._executorShapeConfigDetails;
  }
  public putExecutorShapeConfigDetails(value: DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetails) {
    this._executorShapeConfigDetails.internalValue = value;
  }
  public resetExecutorShapeConfigDetails() {
    this._executorShapeConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorShapeConfigDetailsInput() {
    return this._executorShapeConfigDetails.internalValue;
  }
}
export interface DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#memory_in_gbs DatasciencePipelineRun#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#ocpus DatasciencePipelineRun#ocpus}
  */
  readonly ocpus?: number;
}

export function datasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsToTerraform(struct?: DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference | DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function datasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsToHclTerraform(struct?: DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference | DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#block_storage_size_in_gbs DatasciencePipelineRun#block_storage_size_in_gbs}
  */
  readonly blockStorageSizeInGbs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#shape_name DatasciencePipelineRun#shape_name}
  */
  readonly shapeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#subnet_id DatasciencePipelineRun#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * shape_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#shape_config_details DatasciencePipelineRun#shape_config_details}
  */
  readonly shapeConfigDetails?: DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails;
}

export function datasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsToTerraform(struct?: DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsOutputReference | DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_size_in_gbs: cdktf.numberToTerraform(struct!.blockStorageSizeInGbs),
    shape_name: cdktf.stringToTerraform(struct!.shapeName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    shape_config_details: datasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsToTerraform(struct!.shapeConfigDetails),
  }
}


export function datasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsToHclTerraform(struct?: DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsOutputReference | DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_storage_size_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.blockStorageSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape_name: {
      value: cdktf.stringToHclTerraform(struct!.shapeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape_config_details: {
      value: datasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsToHclTerraform(struct!.shapeConfigDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorageSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageSizeInGbs = this._blockStorageSizeInGbs;
    }
    if (this._shapeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeName = this._shapeName;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._shapeConfigDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeConfigDetails = this._shapeConfigDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockStorageSizeInGbs = undefined;
      this._shapeName = undefined;
      this._subnetId = undefined;
      this._shapeConfigDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockStorageSizeInGbs = value.blockStorageSizeInGbs;
      this._shapeName = value.shapeName;
      this._subnetId = value.subnetId;
      this._shapeConfigDetails.internalValue = value.shapeConfigDetails;
    }
  }

  // block_storage_size_in_gbs - computed: false, optional: false, required: true
  private _blockStorageSizeInGbs?: number; 
  public get blockStorageSizeInGbs() {
    return this.getNumberAttribute('block_storage_size_in_gbs');
  }
  public set blockStorageSizeInGbs(value: number) {
    this._blockStorageSizeInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageSizeInGbsInput() {
    return this._blockStorageSizeInGbs;
  }

  // shape_name - computed: false, optional: false, required: true
  private _shapeName?: string; 
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }
  public set shapeName(value: string) {
    this._shapeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeNameInput() {
    return this._shapeName;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // shape_config_details - computed: false, optional: true, required: false
  private _shapeConfigDetails = new DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference(this, "shape_config_details");
  public get shapeConfigDetails() {
    return this._shapeConfigDetails;
  }
  public putShapeConfigDetails(value: DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails) {
    this._shapeConfigDetails.internalValue = value;
  }
  public resetShapeConfigDetails() {
    this._shapeConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigDetailsInput() {
    return this._shapeConfigDetails.internalValue;
  }
}
export interface DatasciencePipelineRunStepOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#step_name DatasciencePipelineRun#step_name}
  */
  readonly stepName: string;
  /**
  * step_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#step_configuration_details DatasciencePipelineRun#step_configuration_details}
  */
  readonly stepConfigurationDetails: DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails;
  /**
  * step_container_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#step_container_configuration_details DatasciencePipelineRun#step_container_configuration_details}
  */
  readonly stepContainerConfigurationDetails?: DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails;
  /**
  * step_dataflow_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#step_dataflow_configuration_details DatasciencePipelineRun#step_dataflow_configuration_details}
  */
  readonly stepDataflowConfigurationDetails?: DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetails;
  /**
  * step_infrastructure_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#step_infrastructure_configuration_details DatasciencePipelineRun#step_infrastructure_configuration_details}
  */
  readonly stepInfrastructureConfigurationDetails?: DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetails;
}

export function datasciencePipelineRunStepOverrideDetailsToTerraform(struct?: DatasciencePipelineRunStepOverrideDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step_name: cdktf.stringToTerraform(struct!.stepName),
    step_configuration_details: datasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsToTerraform(struct!.stepConfigurationDetails),
    step_container_configuration_details: datasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsToTerraform(struct!.stepContainerConfigurationDetails),
    step_dataflow_configuration_details: datasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsToTerraform(struct!.stepDataflowConfigurationDetails),
    step_infrastructure_configuration_details: datasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsToTerraform(struct!.stepInfrastructureConfigurationDetails),
  }
}


export function datasciencePipelineRunStepOverrideDetailsToHclTerraform(struct?: DatasciencePipelineRunStepOverrideDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    step_name: {
      value: cdktf.stringToHclTerraform(struct!.stepName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step_configuration_details: {
      value: datasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsToHclTerraform(struct!.stepConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsList",
    },
    step_container_configuration_details: {
      value: datasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsToHclTerraform(struct!.stepContainerConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsList",
    },
    step_dataflow_configuration_details: {
      value: datasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsToHclTerraform(struct!.stepDataflowConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsList",
    },
    step_infrastructure_configuration_details: {
      value: datasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsToHclTerraform(struct!.stepInfrastructureConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasciencePipelineRunStepOverrideDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasciencePipelineRunStepOverrideDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stepName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepName = this._stepName;
    }
    if (this._stepConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepConfigurationDetails = this._stepConfigurationDetails?.internalValue;
    }
    if (this._stepContainerConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepContainerConfigurationDetails = this._stepContainerConfigurationDetails?.internalValue;
    }
    if (this._stepDataflowConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepDataflowConfigurationDetails = this._stepDataflowConfigurationDetails?.internalValue;
    }
    if (this._stepInfrastructureConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepInfrastructureConfigurationDetails = this._stepInfrastructureConfigurationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasciencePipelineRunStepOverrideDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stepName = undefined;
      this._stepConfigurationDetails.internalValue = undefined;
      this._stepContainerConfigurationDetails.internalValue = undefined;
      this._stepDataflowConfigurationDetails.internalValue = undefined;
      this._stepInfrastructureConfigurationDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stepName = value.stepName;
      this._stepConfigurationDetails.internalValue = value.stepConfigurationDetails;
      this._stepContainerConfigurationDetails.internalValue = value.stepContainerConfigurationDetails;
      this._stepDataflowConfigurationDetails.internalValue = value.stepDataflowConfigurationDetails;
      this._stepInfrastructureConfigurationDetails.internalValue = value.stepInfrastructureConfigurationDetails;
    }
  }

  // step_name - computed: false, optional: false, required: true
  private _stepName?: string; 
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
  public set stepName(value: string) {
    this._stepName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepNameInput() {
    return this._stepName;
  }

  // step_configuration_details - computed: false, optional: false, required: true
  private _stepConfigurationDetails = new DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference(this, "step_configuration_details");
  public get stepConfigurationDetails() {
    return this._stepConfigurationDetails;
  }
  public putStepConfigurationDetails(value: DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails) {
    this._stepConfigurationDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepConfigurationDetailsInput() {
    return this._stepConfigurationDetails.internalValue;
  }

  // step_container_configuration_details - computed: false, optional: true, required: false
  private _stepContainerConfigurationDetails = new DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference(this, "step_container_configuration_details");
  public get stepContainerConfigurationDetails() {
    return this._stepContainerConfigurationDetails;
  }
  public putStepContainerConfigurationDetails(value: DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails) {
    this._stepContainerConfigurationDetails.internalValue = value;
  }
  public resetStepContainerConfigurationDetails() {
    this._stepContainerConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepContainerConfigurationDetailsInput() {
    return this._stepContainerConfigurationDetails.internalValue;
  }

  // step_dataflow_configuration_details - computed: false, optional: true, required: false
  private _stepDataflowConfigurationDetails = new DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetailsOutputReference(this, "step_dataflow_configuration_details");
  public get stepDataflowConfigurationDetails() {
    return this._stepDataflowConfigurationDetails;
  }
  public putStepDataflowConfigurationDetails(value: DatasciencePipelineRunStepOverrideDetailsStepDataflowConfigurationDetails) {
    this._stepDataflowConfigurationDetails.internalValue = value;
  }
  public resetStepDataflowConfigurationDetails() {
    this._stepDataflowConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepDataflowConfigurationDetailsInput() {
    return this._stepDataflowConfigurationDetails.internalValue;
  }

  // step_infrastructure_configuration_details - computed: false, optional: true, required: false
  private _stepInfrastructureConfigurationDetails = new DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetailsOutputReference(this, "step_infrastructure_configuration_details");
  public get stepInfrastructureConfigurationDetails() {
    return this._stepInfrastructureConfigurationDetails;
  }
  public putStepInfrastructureConfigurationDetails(value: DatasciencePipelineRunStepOverrideDetailsStepInfrastructureConfigurationDetails) {
    this._stepInfrastructureConfigurationDetails.internalValue = value;
  }
  public resetStepInfrastructureConfigurationDetails() {
    this._stepInfrastructureConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInfrastructureConfigurationDetailsInput() {
    return this._stepInfrastructureConfigurationDetails.internalValue;
  }
}

export class DatasciencePipelineRunStepOverrideDetailsList extends cdktf.ComplexList {
  public internalValue? : DatasciencePipelineRunStepOverrideDetails[] | cdktf.IResolvable

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
  public get(index: number): DatasciencePipelineRunStepOverrideDetailsOutputReference {
    return new DatasciencePipelineRunStepOverrideDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasciencePipelineRunTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#create DatasciencePipelineRun#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#delete DatasciencePipelineRun#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#update DatasciencePipelineRun#update}
  */
  readonly update?: string;
}

export function datasciencePipelineRunTimeoutsToTerraform(struct?: DatasciencePipelineRunTimeouts | cdktf.IResolvable): any {
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


export function datasciencePipelineRunTimeoutsToHclTerraform(struct?: DatasciencePipelineRunTimeouts | cdktf.IResolvable): any {
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

export class DatasciencePipelineRunTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasciencePipelineRunTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatasciencePipelineRunTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run oci_datascience_pipeline_run}
*/
export class DatasciencePipelineRun extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_pipeline_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatasciencePipelineRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatasciencePipelineRun to import
  * @param importFromId The id of the existing DatasciencePipelineRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatasciencePipelineRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_pipeline_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/resources/datascience_pipeline_run oci_datascience_pipeline_run} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasciencePipelineRunConfig
  */
  public constructor(scope: Construct, id: string, config: DatasciencePipelineRunConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_pipeline_run',
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._deleteRelatedJobRuns = config.deleteRelatedJobRuns;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._opcParentRptUrl = config.opcParentRptUrl;
    this._pipelineId = config.pipelineId;
    this._projectId = config.projectId;
    this._systemTags = config.systemTags;
    this._configurationOverrideDetails.internalValue = config.configurationOverrideDetails;
    this._infrastructureConfigurationOverrideDetails.internalValue = config.infrastructureConfigurationOverrideDetails;
    this._logConfigurationOverrideDetails.internalValue = config.logConfigurationOverrideDetails;
    this._stepOverrideDetails.internalValue = config.stepOverrideDetails;
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

  // configuration_details - computed: true, optional: false, required: false
  private _configurationDetails = new DatasciencePipelineRunConfigurationDetailsList(this, "configuration_details", false);
  public get configurationDetails() {
    return this._configurationDetails;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // delete_related_job_runs - computed: false, optional: true, required: false
  private _deleteRelatedJobRuns?: boolean | cdktf.IResolvable; 
  public get deleteRelatedJobRuns() {
    return this.getBooleanAttribute('delete_related_job_runs');
  }
  public set deleteRelatedJobRuns(value: boolean | cdktf.IResolvable) {
    this._deleteRelatedJobRuns = value;
  }
  public resetDeleteRelatedJobRuns() {
    this._deleteRelatedJobRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRelatedJobRunsInput() {
    return this._deleteRelatedJobRuns;
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

  // log_details - computed: true, optional: false, required: false
  private _logDetails = new DatasciencePipelineRunLogDetailsList(this, "log_details", false);
  public get logDetails() {
    return this._logDetails;
  }

  // opc_parent_rpt_url - computed: false, optional: true, required: false
  private _opcParentRptUrl?: string; 
  public get opcParentRptUrl() {
    return this.getStringAttribute('opc_parent_rpt_url');
  }
  public set opcParentRptUrl(value: string) {
    this._opcParentRptUrl = value;
  }
  public resetOpcParentRptUrl() {
    this._opcParentRptUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcParentRptUrlInput() {
    return this._opcParentRptUrl;
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
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

  // step_runs - computed: true, optional: false, required: false
  private _stepRuns = new DatasciencePipelineRunStepRunsList(this, "step_runs", false);
  public get stepRuns() {
    return this._stepRuns;
  }

  // system_tags - computed: true, optional: true, required: false
  private _systemTags?: { [key: string]: string }; 
  public get systemTags() {
    return this.getStringMapAttribute('system_tags');
  }
  public set systemTags(value: { [key: string]: string }) {
    this._systemTags = value;
  }
  public resetSystemTags() {
    this._systemTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTagsInput() {
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

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // configuration_override_details - computed: false, optional: true, required: false
  private _configurationOverrideDetails = new DatasciencePipelineRunConfigurationOverrideDetailsOutputReference(this, "configuration_override_details");
  public get configurationOverrideDetails() {
    return this._configurationOverrideDetails;
  }
  public putConfigurationOverrideDetails(value: DatasciencePipelineRunConfigurationOverrideDetails) {
    this._configurationOverrideDetails.internalValue = value;
  }
  public resetConfigurationOverrideDetails() {
    this._configurationOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationOverrideDetailsInput() {
    return this._configurationOverrideDetails.internalValue;
  }

  // infrastructure_configuration_override_details - computed: false, optional: true, required: false
  private _infrastructureConfigurationOverrideDetails = new DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsOutputReference(this, "infrastructure_configuration_override_details");
  public get infrastructureConfigurationOverrideDetails() {
    return this._infrastructureConfigurationOverrideDetails;
  }
  public putInfrastructureConfigurationOverrideDetails(value: DatasciencePipelineRunInfrastructureConfigurationOverrideDetails) {
    this._infrastructureConfigurationOverrideDetails.internalValue = value;
  }
  public resetInfrastructureConfigurationOverrideDetails() {
    this._infrastructureConfigurationOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureConfigurationOverrideDetailsInput() {
    return this._infrastructureConfigurationOverrideDetails.internalValue;
  }

  // log_configuration_override_details - computed: false, optional: true, required: false
  private _logConfigurationOverrideDetails = new DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference(this, "log_configuration_override_details");
  public get logConfigurationOverrideDetails() {
    return this._logConfigurationOverrideDetails;
  }
  public putLogConfigurationOverrideDetails(value: DatasciencePipelineRunLogConfigurationOverrideDetails) {
    this._logConfigurationOverrideDetails.internalValue = value;
  }
  public resetLogConfigurationOverrideDetails() {
    this._logConfigurationOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationOverrideDetailsInput() {
    return this._logConfigurationOverrideDetails.internalValue;
  }

  // step_override_details - computed: false, optional: true, required: false
  private _stepOverrideDetails = new DatasciencePipelineRunStepOverrideDetailsList(this, "step_override_details", false);
  public get stepOverrideDetails() {
    return this._stepOverrideDetails;
  }
  public putStepOverrideDetails(value: DatasciencePipelineRunStepOverrideDetails[] | cdktf.IResolvable) {
    this._stepOverrideDetails.internalValue = value;
  }
  public resetStepOverrideDetails() {
    this._stepOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepOverrideDetailsInput() {
    return this._stepOverrideDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatasciencePipelineRunTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatasciencePipelineRunTimeouts) {
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
      delete_related_job_runs: cdktf.booleanToTerraform(this._deleteRelatedJobRuns),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      opc_parent_rpt_url: cdktf.stringToTerraform(this._opcParentRptUrl),
      pipeline_id: cdktf.stringToTerraform(this._pipelineId),
      project_id: cdktf.stringToTerraform(this._projectId),
      system_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._systemTags),
      configuration_override_details: datasciencePipelineRunConfigurationOverrideDetailsToTerraform(this._configurationOverrideDetails.internalValue),
      infrastructure_configuration_override_details: datasciencePipelineRunInfrastructureConfigurationOverrideDetailsToTerraform(this._infrastructureConfigurationOverrideDetails.internalValue),
      log_configuration_override_details: datasciencePipelineRunLogConfigurationOverrideDetailsToTerraform(this._logConfigurationOverrideDetails.internalValue),
      step_override_details: cdktf.listMapper(datasciencePipelineRunStepOverrideDetailsToTerraform, true)(this._stepOverrideDetails.internalValue),
      timeouts: datasciencePipelineRunTimeoutsToTerraform(this._timeouts.internalValue),
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
      delete_related_job_runs: {
        value: cdktf.booleanToHclTerraform(this._deleteRelatedJobRuns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      opc_parent_rpt_url: {
        value: cdktf.stringToHclTerraform(this._opcParentRptUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_id: {
        value: cdktf.stringToHclTerraform(this._pipelineId),
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
      system_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._systemTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      configuration_override_details: {
        value: datasciencePipelineRunConfigurationOverrideDetailsToHclTerraform(this._configurationOverrideDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasciencePipelineRunConfigurationOverrideDetailsList",
      },
      infrastructure_configuration_override_details: {
        value: datasciencePipelineRunInfrastructureConfigurationOverrideDetailsToHclTerraform(this._infrastructureConfigurationOverrideDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasciencePipelineRunInfrastructureConfigurationOverrideDetailsList",
      },
      log_configuration_override_details: {
        value: datasciencePipelineRunLogConfigurationOverrideDetailsToHclTerraform(this._logConfigurationOverrideDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasciencePipelineRunLogConfigurationOverrideDetailsList",
      },
      step_override_details: {
        value: cdktf.listMapperHcl(datasciencePipelineRunStepOverrideDetailsToHclTerraform, true)(this._stepOverrideDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasciencePipelineRunStepOverrideDetailsList",
      },
      timeouts: {
        value: datasciencePipelineRunTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatasciencePipelineRunTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
