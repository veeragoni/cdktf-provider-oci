# Contributing to CDKTF Provider OCI

## Development Setup

### Prerequisites
- Node.js 18+
- Yarn
- Python 3.8+ (for Python bindings)

### Setup
```bash
# Clone the repository
git clone https://github.com/veeragoni/cdktf-provider-oci.git
cd cdktf-provider-oci

# Install dependencies
yarn install

# Generate provider bindings (if needed for testing)
./scripts/generate-provider.sh

# Run tests
yarn test

# Build the project
yarn build
```

### Project Structure
```
.
├── src/              # Source code for custom constructs
├── lib/              # Compiled JavaScript code
├── dist/             # Distribution packages
├── generated/        # Generated provider bindings (local development)
├── scripts/          # Utility scripts
└── test/             # Test files
```

## GitHub Actions Automation

This repository includes automated workflows:

1. **Daily Provider Updates**: Checks for new OCI provider versions and creates PRs
2. **Build & Test**: Runs on every push and pull request
3. **Release**: Automatically publishes to NPM and PyPI on version tags
4. **Generate Bindings**: Can be triggered manually to regenerate provider bindings

### Setting up GitHub Secrets

To enable automated publishing, configure these secrets in your GitHub repository:

- `NPM_TOKEN`: NPM automation token for publishing
- `TWINE_USERNAME`: PyPI username (use `__token__` for API tokens)
- `TWINE_PASSWORD`: PyPI password or API token

See [GITHUB_SECRETS_SETUP.md](./GITHUB_SECRETS_SETUP.md) for detailed instructions.

## Version Management

This project follows semantic versioning. The OCI provider version is tracked separately in `provider-config.json`.

**Important**: The package.json version should always remain as "0.0.0" in the repository. Projen handles version bumping during the release process.

## Making Changes

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `yarn test`
5. Build: `yarn build`
6. Submit a pull request

## Release Process

Releases are automated via GitHub Actions. When changes are merged to main:

1. The release workflow automatically bumps the version
2. Creates a changelog
3. Publishes to NPM and PyPI
4. Creates a GitHub release

## Understanding the Package

This package serves as a guide for generating OCI provider bindings locally. Due to the massive size of the OCI provider (thousands of resources), we don't bundle the actual provider code. Instead:

1. The package provides helper utilities and interfaces
2. Users generate the actual bindings in their projects using `cdktf get`
3. This approach avoids npm package size limits and compilation memory issues

## Questions?

Open an issue in the [GitHub repository](https://github.com/veeragoni/cdktf-provider-oci/issues).