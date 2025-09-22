# GitHub Secrets Setup for CDKTF OCI Provider

This document explains how to set up the required GitHub secrets for automated publishing to NPM and PyPI.

## Required Secrets

### 1. NPM Publishing

To publish packages to NPM, you need to set up the following secret:

**Secret Name:** `NPM_TOKEN`

**How to obtain:**
1. Log in to [npmjs.com](https://www.npmjs.com/)
2. Click on your profile picture → Access Tokens
3. Click "Generate New Token" → "Classic Token"
4. Select type: "Automation" (for CI/CD)
5. Copy the generated token
6. Add it to your GitHub repository:
   - Go to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Your NPM token (starts with `npm_`)

### 2. PyPI Publishing (Using API Token - Recommended)

To publish packages to PyPI, you'll use an API token with Twine (the official PyPI upload tool).

**Secret Names:**
- `TWINE_USERNAME`: Must be set to `__token__` (literally this exact string)
- `TWINE_PASSWORD`: Your PyPI API token

**How to obtain PyPI API Token:**
1. Log in to [pypi.org](https://pypi.org/)
2. Go to **Account Settings** → **API tokens**
3. Click **"Add API token"**
4. Configure the token:
   - **Token name**: `cdktf-provider-oci-ci`
   - **Scope**: Choose one:
     - "Entire account" (can create new projects)
     - "Project: cdktf-provider-oci" (after first manual upload)
5. Click **"Add token"**
6. **Copy the token immediately** (it won't be shown again!)
7. Add to GitHub secrets:
   - `TWINE_USERNAME`: `__token__`
   - `TWINE_PASSWORD`: Your token (format: `pypi-AgEIcHlwaS5vcmcC...`)

**Why Twine?**
Twine is the official PyPI upload tool maintained by the Python Packaging Authority. The GitHub Actions workflow uses it because:
- It's the standard, secure way to upload to PyPI
- Supports API tokens natively
- Handles package signing and verification
- Works reliably in CI/CD environments

### 3. GitHub Token (Automatic)

The `GITHUB_TOKEN` is automatically provided by GitHub Actions and doesn't need to be configured. It's used for:
- Creating releases
- Creating pull requests
- Auto-approving dependabot PRs

## Adding Secrets to GitHub

1. Navigate to your repository on GitHub
2. Go to **Settings** (repository settings, not account settings)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add each secret with its name and value
6. Click **Add secret**

## Verifying the Setup

After adding the secrets, you can verify they're working by:

1. **Manual Release Test:**
   ```bash
   git tag v0.0.1
   git push origin v0.0.1
   ```
   This will trigger the release workflow.

2. **Check Workflow Runs:**
   - Go to Actions tab in your GitHub repository
   - Look for the "release" workflow
   - Check if NPM and PyPI publishing steps succeed

## Security Best Practices

1. **Never commit secrets** to your repository
2. **Use API tokens** instead of passwords when possible
3. **Limit token scope** to only what's necessary
4. **Rotate tokens regularly** (every 90 days recommended)
5. **Use environment-specific tokens** for production vs development

## Troubleshooting

### NPM Publishing Fails
- Verify the package name is available or you have access
- Check if the token has the correct permissions
- Ensure NPM_TOKEN starts with `npm_`

### PyPI Publishing Fails
- Verify the package name is available or you have access
- If using API token, ensure TWINE_USERNAME is set to `__token__`
- Check if 2FA is enabled on PyPI (may require API token)

### Workflow Not Triggering
- Ensure you're pushing to the `main` branch
- Check if workflows are enabled in repository settings
- Verify `.github/workflows/` files are committed

## Optional: Automated Provider Updates

The `check-provider-updates` workflow runs daily to check for new OCI provider versions. It creates pull requests automatically but doesn't require additional secrets.

## Support

If you encounter issues:
1. Check the Actions tab for detailed error logs
2. Verify all secrets are set correctly
3. Ensure tokens haven't expired
4. Open an issue in the repository with sanitized error logs