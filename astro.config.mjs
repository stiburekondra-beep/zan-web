// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// base: název GitHub repozitáře — nutné pro správné cesty ke CSS/JS na GitHub Pages
// Až budeš mít vlastní doménu, toto odstraň (nebo nastav na '/')
export default defineConfig({
  output: 'static',
  base: '/zan-web/',
  vite: {
    plugins: [tailwindcss()]
  }
});