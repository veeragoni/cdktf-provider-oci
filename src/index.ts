// Re-export main OCI provider class
export { OciProvider } from '../generated/providers/oci/provider';

// Re-export commonly used OCI resources
export { CoreInstance } from '../generated/providers/oci/core-instance';
export { CoreVcn } from '../generated/providers/oci/core-vcn';
export { CoreSubnet } from '../generated/providers/oci/core-subnet';
export { CoreInternetGateway } from '../generated/providers/oci/core-internet-gateway';
export { CoreSecurityList } from '../generated/providers/oci/core-security-list';
export { CoreRouteTable } from '../generated/providers/oci/core-route-table';
export { CoreVolume } from '../generated/providers/oci/core-volume';
export { CoreVolumeAttachment } from '../generated/providers/oci/core-volume-attachment';
export { IdentityCompartment } from '../generated/providers/oci/identity-compartment';
export { ObjectstorageBucket } from '../generated/providers/oci/objectstorage-bucket';
export { ObjectstorageObject } from '../generated/providers/oci/objectstorage-object';

// Export all OCI provider bindings through a namespace
export * as oci from '../generated/providers/oci';