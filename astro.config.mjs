import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'es', //Idioma por defecto de la pagina
    locales: ['es', 'ca'], //idiomas que soporta
    //Enrutado
    routing: {
      prefixDefaultLocale: false //es -> /, ca -> /ca 
    },

  }

});