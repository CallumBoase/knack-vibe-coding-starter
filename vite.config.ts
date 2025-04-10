import { defineConfig } from 'vite'

export default defineConfig(({mode}) => ({
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'knack-vibe-coding-starter',
      formats: ['umd'],
      fileName: (format) => `knack-vibe-coding-starter.${format}.js`
    }
  },
  server: {
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}))