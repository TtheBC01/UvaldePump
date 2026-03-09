# UvaldePump
Webpage for uvaldepump.com

## Deploying to GitHub Pages

This project is configured for a GitHub Pages **project site** deployment at:

- `https://<your-username>.github.io/UvaldePump/`

### One-time GitHub setup

1. Push this repository to GitHub (default branch: `main`).
2. In GitHub, open **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### How deployment works

- The workflow at `.github/workflows/deploy.yml` runs on pushes to `main`.
- It installs dependencies, builds with `npm run build`, and deploys the `dist` folder.

### Verify after deploy

1. Wait for the `Deploy to GitHub Pages` workflow to finish successfully.
2. Open `https://<your-username>.github.io/UvaldePump/`.
3. Confirm the header logo and main page sections load correctly.
