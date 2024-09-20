
// 1. Import utilities from `astro:content`
import { z as zod, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const postCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: zod.object({
    title: zod.string(),
    pubDate: zod.date(),
    description: zod.string(),
    author: zod.string(),
    tags: zod.array(zod.string()),
    image: zod.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'posts': postCollection,
};
