import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const environmentVariables = loadEnv(mode, process.cwd(), '')

  return {
    base: environmentVariables.VITE_BASE_PATH || '/',
    plugins: [react()],
  }
})
