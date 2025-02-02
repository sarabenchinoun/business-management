import * as z from "zod";

const EnvSchema = z.object({
	sanityProjectId: z.string({
		required_error: "NEXT_PUBLIC_SANITY_PROJECT_ID is required",
	}),
	sanityDataset: z
		.string({
			required_error: "NEXT_PUBLIC_SANITY_DATASET is required",
		})
		.default("production"),
	sanityApiVersion: z
		.string({
			required_error: "NEXT_PUBLIC_SANITY_API_VERSION is required",
		})
		.default("2025-02-01"),
});

export const env = EnvSchema.parse({
	sanityProjectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	sanityDataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	sanityApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
});
