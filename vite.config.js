import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',  // 👈 Forces React 17+ JSX transform
      jsxImportSource: 'react'
    })
  ],
  esbuild: {
    jsxInject: `import React from 'react'` // 👈 Injects React globally
  }
})





