import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        author: z.string().default('Luis Pereida'),
        image: image().optional(),
        tags: z.array(z.string()),
        draft: z.boolean().optional(),
    }),
});

const cheatsheets = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        subtitle: z.string().optional(),
        shortName: z.string().optional(), // Nombre corto para cards (ej: "LINUX")
        difficulty: z.enum(['principiante', 'intermedio', 'avanzado']),
        tags: z.array(z.string()),
        icon: z.string(),
        pubDate: z.coerce.date(),
        author: z.string().default('Luis Pereida'),
        image: image(),
        printable: z.boolean().default(true),
    }),
});

const presentations = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        author: z.string().default('Luis Pereida'),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().optional(),
    }),
});

export const collections = { blog, cheatsheets, presentations };
