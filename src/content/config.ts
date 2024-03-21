import { z, defineCollection, reference } from "astro:content";

const animal = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      binomial: z.string(),
      habitat: z.enum(["land", "sea", "air"]),
      icon: image(),
    }),
});

const story = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      animal: reference("animal"),
      chapter: z.number(),
      images: z.array(image()).optional(),
    }),
});

export const collections = {
  animal,
  story,
};
