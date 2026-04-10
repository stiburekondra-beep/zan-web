// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Pro GitHub Pages: pokud nemáš vlastní doménu, nastav base na název repozitáře
// např. base: '/zan-web/' — zatím prázdné pro custom doménu nebo root deployment
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});