import { defineConfig } from 'astro/config';


import icon from 'astro-icon';
import vue from '@astrojs/vue';
import react from '@astrojs/react';

import pagefind from "astro-pagefind";


export default defineConfig({
  integrations: [icon(), vue(), react(),pagefind()],

  site: "https://extraordinary-unicorn-841d05.netlify.app"
});

