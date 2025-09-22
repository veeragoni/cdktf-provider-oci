// https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/network_load_balancer_network_load_balancer_health
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/network_load_balancer_network_load_balancer_health#id DataOciNetworkLoadBalancerNetworkLoadBalancerHealth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/network_load_balancer_network_load_balancer_health#network_load_balancer_id DataOciNetworkLoadBalancerNetworkLoadBalancerHealth#network_load_balancer_id}
  */
  readonly networkLoadBalancerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/network_load_balancer_network_load_balancer_health oci_network_load_balancer_network_load_balancer_health}
*/
export class DataOciNetworkLoadBalancerNetworkLoadBalancerHealth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_load_balancer_network_load_balancer_health";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciNetworkLoadBalancerNetworkLoadBalancerHealth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciNetworkLoadBalancerNetworkLoadBalancerHealth to import
  * @param importFromId The id of the existing DataOciNetworkLoadBalancerNetworkLoadBalancerHealth that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/network_load_balancer_network_load_balancer_health#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciNetworkLoadBalancerNetworkLoadBalancerHealth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_network_load_balancer_network_load_balancer_health", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/7.19.0/docs/data-sources/network_load_balancer_network_load_balancer_health oci_network_load_balancer_network_load_balancer_health} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_network_load_balancer_network_load_balancer_health',
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
    this._networkLoadBalancerId = config.networkLoadBalancerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // critical_state_backend_set_names - computed: true, optional: false, required: false
  public get criticalStateBackendSetNames() {
    return this.getListAttribute('critical_state_backend_set_names');
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

  // total_backend_set_count - computed: true, optional: false, required: false
  public get totalBackendSetCount() {
    return this.getNumberAttribute('total_backend_set_count');
  }

  // unknown_state_backend_set_names - computed: true, optional: false, required: false
  public get unknownStateBackendSetNames() {
    return this.getListAttribute('unknown_state_backend_set_names');
  }

  // warning_state_backend_set_names - computed: true, optional: false, required: false
  public get warningStateBackendSetNames() {
    return this.getListAttribute('warning_state_backend_set_names');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      network_load_balancer_id: cdktf.stringToTerraform(this._networkLoadBalancerId),
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
