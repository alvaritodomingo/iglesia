---
name: Static deployment served 404 despite successful builds
description: Why this repl uses Flask+gunicorn autoscale instead of Replit static hosting
---

Replit `static` deployment for this repl returned HTTP 404 at `/` on both the
`*.replit.app` URL and the custom domain, even though the build status reported
`success` (tried `publicDir = "."` and `publicDir = "public"`). The dev server
served the same files at 200 the whole time, so it was not a content problem.

**Resolution:** serve the site through a Flask app (`main.py`) that serves files
from `public/`, deployed as `autoscale` with
`python -m gunicorn --bind=0.0.0.0:5000 --reuse-port main:app`. The dev workflow
uses the same gunicorn command so dev and prod match.

**Why:** static hosting was not serving the uploaded files for this repl; the
Flask+gunicorn autoscale path is fully under our control and passes the `GET /`
health check.

**How to apply:** if asked to switch back to static to save cost, re-test the
live URL with `curl` after publishing — do not trust the build "success" status
alone, since it succeeded while still serving 404.

**Autoscale port gotcha:** the deployer health-checks the port from `.replit`'s
`[[ports]]` (here 5000). A run command on any other port (e.g. 8080) fails with
"expected port 5000". Bind gunicorn to 5000.
