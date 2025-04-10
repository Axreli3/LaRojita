import { defineCollection, z } from "astro:content";

const terms = defineCollection({
    schema: z.object({
        title: z.string(),
        ultimaActualización: z.string(),
        description: z.string(),
    }),
});

export const collections = { terms }