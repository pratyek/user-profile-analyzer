# GitHub Profile Analyzer

A React application that analyzes GitHub profiles, showing repositories and commit activity for any GitHub user. This application uses GitHub's API with authentication to fetch user repositories and their commit patterns.

![GitHub Profile Analyzer Screenshot](https://via.placeholder.com/800x400?text=GitHub+Profile+Analyzer)

## Features

- Display repositories for a given GitHub username
- Show commit activity by day of week
- Clean and responsive UI using ShadCN components
- Built with React and TypeScript
- Authentication with GitHub token to avoid rate limiting

## 🚨 Important Security Notice 🚨

- **Never commit your GitHub token directly in your code**
- The current implementation includes a hardcoded token which is not secure
- In production, use environment variables or a secure backend service

## Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn
- GitHub Personal Access Token (classic) with `repo` and `read:user` scopes

## Installation

1. Clone this repository or extract the ZIP file:

```bash
git clone <repository-url>
cd github-profile-analyzer
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory (for local development):

```
VITE_GITHUB_TOKEN=your_github_personal_access_token
```

4. Update the token in the `GitHubProfileAnalyzer.tsx` component:

Replace this line:
```typescript
const token = "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";
```

With:
```typescript
const token = import.meta.env.VITE_GITHUB_TOKEN;
```

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the development server at [http://localhost:5173](http://localhost:5173) (or another port if 5173 is already in use).

## Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

The build files will be in the `dist` directory.

## Deployment Options

### Option 1: Deploy to GitHub Pages

1. Install gh-pages:

```bash
npm install --save-dev gh-pages
# or
yarn add --dev gh-pages
```

2. Add the following to your `package.json`:

```json
{
  "homepage": "https://<your-github-username>.github.io/github-profile-analyzer",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy the application:

```bash
npm run deploy
# or
yarn deploy
```

4. Configure GitHub repository settings:
   - Go to your repository on GitHub
   - Navigate to "Settings" > "Pages"
   - Set the source to "gh-pages" branch

### Option 2: Deploy to Netlify

1. Create a `netlify.toml` file in the root directory:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Set up environment variables in Netlify:
   - Go to Site settings > Build & deploy > Environment
   - Add `VITE_GITHUB_TOKEN` with your GitHub token

3. Deploy methods:

   **A. Deploy via GitHub integration:**
   - Create a Netlify account and connect to your GitHub repository
   - Configure the build settings as specified in the `netlify.toml` file
   - Manually trigger a deploy or push changes to your repository

   **B. Deploy via Netlify CLI:**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Initialize site (first time only)
   netlify init
   
   # Deploy
   netlify deploy --prod
   ```

### Option 3: Deploy to Vercel

1. Install the Vercel CLI:

```bash
npm install -g vercel
# or
yarn global add vercel
```

2. Create a `vercel.json` file:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "routes": [{ "src": "/(.*)", "dest": "/index.html" }]
}
```

3. Set up environment variables in Vercel:
   - Create a `.vercel/.env.production.local` file with your GitHub token
   - Or add environment variables through the Vercel dashboard after deployment

4. Deploy:

```bash
vercel
```

5. Follow the on-screen instructions to complete the deployment

## Securing Your GitHub Token

For production deployments, consider these approaches for securing your GitHub token:

1. **Environment Variables**: Use your hosting provider's environment variables feature (all major providers support this).

2. **Backend Proxy**: Create a simple backend service that makes GitHub API requests on behalf of your frontend.

3. **GitHub OAuth App**: For a more robust solution, implement OAuth to allow users to authenticate with their own GitHub accounts.

## GitHub API Rate Limits

- Unauthenticated requests: 60 requests per hour
- Authenticated requests: 5,000 requests per hour

This application uses authentication to get the higher rate limit, but proper token handling is essential for security.

## License

MIT
