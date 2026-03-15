import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.union([image(), z.string().url()]).optional(),
    lang: z.enum(['en', 'ja']),
  }),
});

export const collections = {
  'news': newsCollection,
};
