// astro.config.mjs
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  // Ruta base de tu sitio (para links e import.meta.glob)
  base: '/semana5/',

  // Si alguna vez usas un adapter, iría aquí:
  // integrations: [github()],
  site: 'https://CarlosSolvas.github.io/semana5',

  integrations: [react()],
});