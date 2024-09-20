import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import vue from '@astrojs/vue';
import react from '@astrojs/react';

import pagefind from "astro-pagefind";


export default defineConfig({
  integrations: [icon(), vue(), mdx(), react(),pagefind()],

  site: "https://extraordinary-unicorn-841d05.netlify.app"
});