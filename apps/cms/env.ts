import * as z from "zod";

const EnvSchema = z.object({
	sanityProjectId: z.string({
		required_error: "SANITY_STUDIO_PROJECT_ID is required",
	}),
	sanityDataset: z.string({
		required_error: "SANITY_STUDIO_DATASET is required",
	}),
});

export const env = EnvSchema.parse(process.env);
