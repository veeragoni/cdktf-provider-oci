// https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/network_load_balancer_backend_health
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciNetworkLoadBalancerBackendHealthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/network_load_balancer_backend_health#backend_name DataOciNetworkLoadBalancerBackendHealth#backend_name}
  */
  readonly backendName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/network_load_balancer_backend_health#backend_set_name DataOciNetworkLoadBalancerBackendHealth#backend_set_name}
  */
  readonly backendSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/network_load_balancer_backend_health#id DataOciNetworkLoadBalancerBackendHealth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/network_load_balancer_backend_health#network_load_balancer_id DataOciNetworkLoadBalancerBackendHealth#network_load_balancer_id}
  */
  readonly networkLoadBalancerId: string;
}
export interface DataOciNetworkLoadBalancerBackendHealthHealthCheckResults {
}

export function dataOciNetworkLoadBalancerBackendHealthHealthCheckResultsToTerraform(struct?: DataOciNetworkLoadBalancerBackendHealthHealthCheckResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkLoadBalancerBackendHealthHealthCheckResultsToHclTerraform(struct?: DataOciNetworkLoadBalancerBackendHealthHealthCheckResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkLoadBalancerBackendHealthHealthCheckResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkLoadBalancerBackendHealthHealthCheckResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health_check_status - computed: true, optional: false, required: false
  public get healthCheckStatus() {
    return this.getStringAttribute('health_check_status');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}

export class DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference {
    return new DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/network_load_balancer_backend_health oci_network_load_balancer_backend_health}
*/
export class DataOciNetworkLoadBalancerBackendHealth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_load_balancer_backend_health";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciNetworkLoadBalancerBackendHealth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciNetworkLoadBalancerBackendHealth to import
  * @param importFromId The id of the existing DataOciNetworkLoadBalancerBackendHealth that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/network_load_balancer_backend_health#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciNetworkLoadBalancerBackendHealth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_network_load_balancer_backend_health", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.19.0/docs/data-sources/network_load_balancer_backend_health oci_network_load_balancer_backend_health} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciNetworkLoadBalancerBackendHealthConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciNetworkLoadBalancerBackendHealthConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_network_load_balancer_backend_health',
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
    this._backendName = config.backendName;
    this._backendSetName = config.backendSetName;
    this._id = config.id;
    this._networkLoadBalancerId = config.networkLoadBalancerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_name - computed: false, optional: false, required: true
  private _backendName?: string; 
  public get backendName() {
    return this.getStringAttribute('backend_name');
  }
  public set backendName(value: string) {
    this._backendName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendNameInput() {
    return this._backendName;
  }

  // backend_set_name - computed: false, optional: false, required: true
  private _backendSetName?: string; 
  public get backendSetName() {
    return this.getStringAttribute('backend_set_name');
  }
  public set backendSetName(value: string) {
    this._backendSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendSetNameInput() {
    return this._backendSetName;
  }

  // health_check_results - computed: true, optional: false, required: false
  private _healthCheckResults = new DataOciNetworkLoadBalancerBackendHealthHealthCheckResultsList(this, "health_check_results", false);
  public get healthCheckResults() {
    return this._healthCheckResults;
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

  // network_load_balancer_id - computed: false, optional: false, required: true
  private _networkLoadBalancerId?: string; 
  public get networkLoadBalancerId() {
    return this.getStringAttribute('network_load_balancer_id');
  }
  public set networkLoadBalancerId(value: string) {
    this._networkLoadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLoadBalancerIdInput() {
    return this._networkLoadBalancerId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_name: cdktf.stringToTerraform(this._backendName),
      backend_set_name: cdktf.stringToTerraform(this._backendSetName),
      id: cdktf.stringToTerraform(this._id),
      network_load_balancer_id: cdktf.stringToTerraform(this._networkLoadBalancerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend_name: {
        value: cdktf.stringToHclTerraform(this._backendName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_set_name: {
        value: cdktf.stringToHclTerraform(this._backendSetName),
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
      network_load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._networkLoadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
