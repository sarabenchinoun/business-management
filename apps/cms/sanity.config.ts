import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { env } from "./env";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
	name: "default",
	title: "business-management",

	projectId: env.sanityProjectId,
	dataset: env.sanityDataset,

	plugins: [structureTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
});
