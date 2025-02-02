import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { env } from "./env";
import { schemaTypes, singletonTypes } from "./schemaTypes";
import { structure } from "./structure";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
	name: "default",
	title: "business-management",

	projectId: env.sanityProjectId,
	dataset: env.sanityDataset,

	plugins: [
		structureTool({
			structure,
		}),
		visionTool(),
	],

	// Customise the schema to include singleton types
	// and remove the default template for singleton types from the list (Create Document)
	schema: {
		types: [...schemaTypes, ...singletonTypes],
		// Remove template for singleton types from the default template list
		templates: (templates) =>
			templates.filter(
				({ schemaType }) =>
					!singletonTypes.some((schema) => schema.name === schemaType),
			),
	},

	// Customise the vision tool of the singleton document to filter out actions that are not explicitly included
	document: {
		// For singleton types, filter out actions that are not explicitly included
		// in the `singletonActions` list defined above
		actions: (input, context) =>
			singletonTypes.some((schema) => schema.name === context.schemaType)
				? input.filter(({ action }) => action && singletonActions.has(action))
				: input,
	},
});
