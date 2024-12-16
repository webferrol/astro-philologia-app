import { defineCollection, z } from "astro:content";


const latinCollection = defineCollection({
	schema: z.object({
		titulus: z.string(),
		descriptio: z.string(),
	}),
});

export const collection = {
  'latin': latinCollection,
	'metamorphoseon': latinCollection,
	'amphitruo': latinCollection,
}