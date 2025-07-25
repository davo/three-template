Procedure

1.  Audit current Python version and dependencies

Confirm your app is currently using Python 3.8.

Search for hard-coded version references in:

.python-version, Dockerfile, CI config, pyproject.toml, tox.ini, etc.

List all dependencies via pip freeze, poetry show, or pip list --outdated.

2.  Check compatibility for all dependencies

Use tools like caniusepython3, pyup, or dependabot to identify incompatible packages.

Pay special attention to C-extension packages like numpy, pandas, cryptography, and psycopg2.

Real-world tip:

If you get No module named distutils, upgrading numpy and other core packages usually resolves this.

3.  Update Python version references

Upgrade your Python version via pyenv, asdf, conda, etc.

Update Dockerfiles and CI config to use python:3.13 or equivalent.

Update pyproject.toml, Pipfile, or tox.ini with python = "^3.13" or requires-python = ">=3.13".

4.  Install Python 3.13 locally

Install and activate Python 3.13.

Create a new virtual environment.

Reinstall all dependencies via pip install, poetry install, or pipenv install.

Rebuild native dependencies with --force-reinstall if needed.

5.  Run full test suite

Run all automated tests (pytest, unittest, etc.).

Fix any failures or incompatibilities.

Real-world tip:

If you encounter No module named 'cgi', it's likely due to Python 3.13 deprecating this module. Fixes typically come from updating libraries that used it.

6.  Review Python 3.13 changes and deprecations

Read Python 3.13 release notes.

Watch out for:

Removal of distutils

Deprecation of cgi, collections.abc reorganization, etc.

Real-world tip:

If using Django, you may see Cannot import name ‘url’ from django.conf.urls — update your code to use path() and re\_path() from django.urls.

7.  Update CI/CD pipeline

Ensure CI uses Python 3.13 across all workflows.

Rebuild Docker images with updated base images.

In tox, update envs to include py313.

💡 Advice & Pointers Run ruff, black, and pyupgrade to modernize syntax and spot deprecated idioms.

Use mypy or pyright with stricter type checking under Python 3.13.

Enable **future** imports incrementally to adopt new semantics.

Check that your third-party packages are still maintained and tested under Python 3.13.

⚠️ Forbidden Actions 🚫 Do not mix Python versions across services without strict isolation. 🚫 Do not ignore failing native builds — they may break at runtime. 🚫 Do not hard-code or forget to update Python version references in infra/config files. 🚫 Do not rely on deprecated stdlib modules (cgi, distutils, etc.).

🛠️ Real-World Fixes & Gotchas Problem Fix No module named distutils Upgrade numpy and rebuild your environment No module named 'cgi' Update dependent libraries (most frameworks have migrated) Cannot import name 'url' from django.conf.urls Replace with path() or re\_path() from django.urls; url() was deprecated in Django 3.x
