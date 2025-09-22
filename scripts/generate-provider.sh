#!/bin/bash

# Script to generate CDKTF bindings for OCI provider

set -e

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🔧 CDKTF OCI Provider Generator${NC}"
echo "=================================="

# Check if provider version is passed as argument
PROVIDER_VERSION=${1:-"6.0"}

echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

echo -e "${YELLOW}🔍 Checking OCI Provider version: ${PROVIDER_VERSION}${NC}"

# Generate provider bindings
echo -e "${YELLOW}⚙️  Generating provider bindings...${NC}"
npx cdktf-cli@latest get --language=typescript --provider="oracle/oci@~> ${PROVIDER_VERSION}"

# Also generate for Python if enabled
if [ -f "provider-config.json" ]; then
  PYTHON_ENABLED=$(jq -r '.languages.python.enabled' provider-config.json)
  if [ "$PYTHON_ENABLED" = "true" ]; then
    echo -e "${YELLOW}🐍 Generating Python bindings...${NC}"
    npx cdktf-cli@latest get --language=python --provider="oracle/oci@~> ${PROVIDER_VERSION}"
  fi
fi

echo -e "${YELLOW}🔨 Building project...${NC}"
npm run build

echo -e "${GREEN}✅ Provider bindings generated successfully!${NC}"
echo ""
echo "Generated files:"
echo "  - TypeScript: .gen/providers/oci/"
echo "  - Built files: lib/"
echo ""
echo "Next steps:"
echo "  1. Review the generated bindings"
echo "  2. Run tests: npm test"
echo "  3. Commit changes if everything looks good"