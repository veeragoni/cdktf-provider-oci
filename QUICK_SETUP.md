# Quick Setup Guide for GitHub Secrets

## Step-by-Step Setup

### 1. Get NPM Token
```bash
# Login to npmjs.com
# Go to: Profile → Access Tokens → Generate New Token
# Select: Automation
# Copy the token (npm_...)
```

### 2. Get PyPI API Token
```bash
# Login to pypi.org
# Go to: Account Settings → API tokens → Add API token
# Name: cdktf-provider-oci-ci
# Scope: Entire account (for first time)
# Copy the token (pypi-...)
```

### 3. Add to GitHub Repository

Go to your repository: **Settings → Secrets and variables → Actions**

Add these secrets:

| Secret Name | Value |
|------------|-------|
| `NPM_TOKEN` | Your NPM token (npm_...) |
| `TWINE_USERNAME` | `__token__` (exactly this string) |
| `TWINE_PASSWORD` | Your PyPI token (pypi-...) |

### 4. Test the Setup

```bash
# Create a test release
git tag v0.0.1
git push origin v0.0.1

# Check GitHub Actions tab to see if publish succeeded
```

## Why These Tools?

- **NPM Token**: Direct NPM authentication (no username/password needed)
- **PyPI API Token**: More secure than password, required if 2FA is enabled
- **Twine**: It's not a third-party tool - it's THE official PyPI upload tool

## Environment Variables Reference

When the GitHub Action runs, it sets up:
```yaml
# For NPM
NPM_TOKEN: ${{ secrets.NPM_TOKEN }}

# For PyPI (using Twine)
TWINE_USERNAME: ${{ secrets.TWINE_USERNAME }}  # Should be "__token__"
TWINE_PASSWORD: ${{ secrets.TWINE_PASSWORD }}  # Your pypi-... token
```

Twine automatically recognizes `__token__` as the username and treats the password as an API token.

## Common Issues

**PyPI Upload Fails:**
- Make sure `TWINE_USERNAME` is exactly `__token__` (not your PyPI username)
- Ensure token starts with `pypi-`
- Check token scope (use "Entire account" for new packages)

**NPM Upload Fails:**
- Verify package name is available or you own it
- Check token is "Automation" type
- Ensure token starts with `npm_`