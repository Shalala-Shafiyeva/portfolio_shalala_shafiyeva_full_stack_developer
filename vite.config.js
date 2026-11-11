import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' позволяет открывать сайт и как username.github.io, и как username.github.io/repo-name/
export default defineConfig({
  plugins: [react()],
  base: './',
})
