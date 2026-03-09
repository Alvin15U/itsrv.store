import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  base: '/itsrv.store/' // <--- ВАЖНО: это имя вашего репозитория
})
