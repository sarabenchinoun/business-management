import { defineCliConfig } from "sanity/cli";
import { env } from "./env";

export default defineCliConfig({
	api: {
		projectId: env.sanityProjectId,
		dataset: env.sanityDataset,
	},
	/**
	 * Enable auto-updates for studios.
	 * Learn more at https://www.sanity.io/docs/cli#auto-updates
	 */
	autoUpdates: true,
});
