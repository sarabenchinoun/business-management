import * as z from "zod";

const EnvSchema = z.object({
	sanityProjectId: z.string({
		required_error: "SANITY_STUDIO_PROJECT_ID is required",
	}),
	sanityDataset: z.string({
		required_error: "SANITY_STUDIO_DATASET is required",
	}),
});

export const env = EnvSchema.parse({
	sanityProjectId: process.env.SANITY_STUDIO_PROJECT_ID,
	sanityDataset: process.env.SANITY_STUDIO_DATASET,
});
