import rss, { pagesGlobToRssItems } from '@astrojs/rss';

import frontmatter from './src/layouts/MarkdownPostLayout.astro';

export async function GET(context) {
  return rss({
    title: frontmatter.title,
    description: frontmatter.description,
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}