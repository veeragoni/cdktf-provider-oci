// https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/datascience_model_custom_metadata_artifact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatascienceModelCustomMetadataArtifactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/datascience_model_custom_metadata_artifact#content_disposition DatascienceModelCustomMetadataArtifact#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/datascience_model_custom_metadata_artifact#content_length DatascienceModelCustomMetadataArtifact#content_length}
  */
  readonly contentLength: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/datascience_model_custom_metadata_artifact#id DatascienceModelCustomMetadataArtifact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/datascience_model_custom_metadata_artifact#metadatum_key_name DatascienceModelCustomMetadataArtifact#metadatum_key_name}
  */
  readonly metadatumKeyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/datascience_model_custom_metadata_artifact#model_custom_metadatum_artifact DatascienceModelCustomMetadataArtifact#model_custom_metadatum_artifact}
  */
  readonly modelCustomMetadatumArtifact: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/datascience_model_custom_metadata_artifact#model_id DatascienceModelCustomMetadataArtifact#model_id}
  */
  readonly modelId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/datascience_model_custom_metadata_artifact#timeouts DatascienceModelCustomMetadataArtifact#timeouts}
  */
  readonly timeouts?: DatascienceModelCustomMetadataArtifactTimeouts;
}
export interface DatascienceModelCustomMetadataArtifactTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/datascience_model_custom_metadata_artifact#create DatascienceModelCustomMetadataArtifact#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/datascience_model_custom_metadata_artifact#delete DatascienceModelCustomMetadataArtifact#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/datascience_model_custom_metadata_artifact#update DatascienceModelCustomMetadataArtifact#update}
  */
  readonly update?: string;
}

export function datascienceModelCustomMetadataArtifactTimeoutsToTerraform(struct?: DatascienceModelCustomMetadataArtifactTimeouts | cdktf.IResolvable): any {
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


export function datascienceModelCustomMetadataArtifactTimeoutsToHclTerraform(struct?: DatascienceModelCustomMetadataArtifactTimeouts | cdktf.IResolvable): any {
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

export class DatascienceModelCustomMetadataArtifactTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatascienceModelCustomMetadataArtifactTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatascienceModelCustomMetadataArtifactTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/datascience_model_custom_metadata_artifact oci_datascience_model_custom_metadata_artifact}
*/
export class DatascienceModelCustomMetadataArtifact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_model_custom_metadata_artifact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatascienceModelCustomMetadataArtifact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatascienceModelCustomMetadataArtifact to import
  * @param importFromId The id of the existing DatascienceModelCustomMetadataArtifact that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/datascience_model_custom_metadata_artifact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatascienceModelCustomMetadataArtifact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_model_custom_metadata_artifact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/resources/datascience_model_custom_metadata_artifact oci_datascience_model_custom_metadata_artifact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatascienceModelCustomMetadataArtifactConfig
  */
  public constructor(scope: Construct, id: string, config: DatascienceModelCustomMetadataArtifactConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_model_custom_metadata_artifact',
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
    this._contentDisposition = config.contentDisposition;
    this._contentLength = config.contentLength;
    this._id = config.id;
    this._metadatumKeyName = config.metadatumKeyName;
    this._modelCustomMetadatumArtifact = config.modelCustomMetadatumArtifact;
    this._modelId = config.modelId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_disposition - computed: true, optional: true, required: false
  private _contentDisposition?: string; 
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition;
  }

  // content_length - computed: false, optional: false, required: true
  private _contentLength?: string; 
  public get contentLength() {
    return this.getStringAttribute('content_length');
  }
  public set contentLength(value: string) {
    this._contentLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLengthInput() {
    return this._contentLength;
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

  // metadatum_key_name - computed: false, optional: false, required: true
  private _metadatumKeyName?: string; 
  public get metadatumKeyName() {
    return this.getStringAttribute('metadatum_key_name');
  }
  public set metadatumKeyName(value: string) {
    this._metadatumKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadatumKeyNameInput() {
    return this._metadatumKeyName;
  }

  // model_custom_metadatum_artifact - computed: false, optional: false, required: true
  private _modelCustomMetadatumArtifact?: string; 
  public get modelCustomMetadatumArtifact() {
    return this.getStringAttribute('model_custom_metadatum_artifact');
  }
  public set modelCustomMetadatumArtifact(value: string) {
    this._modelCustomMetadatumArtifact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelCustomMetadatumArtifactInput() {
    return this._modelCustomMetadatumArtifact;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatascienceModelCustomMetadataArtifactTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatascienceModelCustomMetadataArtifactTimeouts) {
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
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_length: cdktf.stringToTerraform(this._contentLength),
      id: cdktf.stringToTerraform(this._id),
      metadatum_key_name: cdktf.stringToTerraform(this._metadatumKeyName),
      model_custom_metadatum_artifact: cdktf.stringToTerraform(this._modelCustomMetadatumArtifact),
      model_id: cdktf.stringToTerraform(this._modelId),
      timeouts: datascienceModelCustomMetadataArtifactTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_disposition: {
        value: cdktf.stringToHclTerraform(this._contentDisposition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_length: {
        value: cdktf.stringToHclTerraform(this._contentLength),
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
      metadatum_key_name: {
        value: cdktf.stringToHclTerraform(this._metadatumKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_custom_metadatum_artifact: {
        value: cdktf.stringToHclTerraform(this._modelCustomMetadatumArtifact),
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
      timeouts: {
        value: datascienceModelCustomMetadataArtifactTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatascienceModelCustomMetadataArtifactTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
