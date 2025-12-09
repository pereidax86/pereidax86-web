// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://pereidax86.com',
  integrations: [sitemap(), robotsTxt()],
  
  build: {
    assets: 'assets'
  },

  redirects: {
    '/2025/01/personaliza-vi-mejora-tu-flujo-de-trabajo/': '/blog/personaliza-vi-flujo-trabajo',
    '/2025/01/vi-el-editor-de-texto-esencial-para-linux/': '/blog/vi-editor-esencial',
    '/2025/01/linux-basico-en-10-comandos-y-como-desatar-todo-su-poder/': '/blog/linux-basico-10-comandos',
    '/2025/01/otros-10-comandos-de-linux-basico-para-seguir-aprendiendo/': '/blog/otros-10-comandos-linux',
    '/2025/01/ayuda-en-linux-sin-rezarle-a-san-google-herramientas-esenciales/': '/blog/ayuda-linux-sin-google',
  }
});