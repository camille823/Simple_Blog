import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import storyblok from '@storyblok/astro'

import pagefind from "astro-pagefind";


export default defineConfig({
  integrations: [icon(), vue(), react(),pagefind(),
    storyblok({
    accessToken: 'tV65xUbymlZ0UJKT1Wcjmgtt',
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
    },
  }),],

  site: "https://extraordinary-unicorn-841d05.netlify.app"
});

