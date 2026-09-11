import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Automatic GitHub Pages Base Path Resolution:
// 1. Explicit env variable: VITE_BASE_PATH (e.g. "/" for custom domain, or "/repo-name/")
// 2. In GitHub Actions: GITHUB_REPOSITORY is automatically provided as "owner/repo-name"
// 3. Fallback default: "/RSHealthcare/" for standard GitHub Pages repository deployment
const getBasePath = () => {
  if (process.env.VITE_BASE_PATH !== undefined) {
    return process.env.VITE_BASE_PATH
  }
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
    return repoName ? `/${repoName}/` : '/RSHealthcare/'
  }
  return '/RSHealthcare/'
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
