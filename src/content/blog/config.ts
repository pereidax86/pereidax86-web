import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		author: z.string().default('Luis Pereida'),
		image: z.string().optional(),
		tags: z.array(z.string()),
        draft: z.boolean().optional(),
	}),
});

export const collections = { blog };