#!/usr/bin/env node

/**
 * Force release script - always allows release to proceed
 * Use this when you want to force publish packages regardless of changes
 *
 * IMPORTANT: After the initial revamp release, switch .projenrc.js back to:
 * 'should-release': 'node scripts/should-release.js'
 *
 * This will ensure nightly OCI provider updates are properly published.
 */

console.log("🚀 Force release mode - always allowing release to proceed");
console.log("📦 This will publish npm and PyPI packages");
console.log("⚠️  Remember to switch back to scripts/should-release.js for automated updates");

// Always exit with success (0) to allow release
process.exit(0);