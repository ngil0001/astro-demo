import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: ({image}) => z.object({
        title: z.string(),
        date: z.string(),
        image: image(),
        author: z.string(),
    }),
});

export const collections = {
    posts: postsCollection,
}