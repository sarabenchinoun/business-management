import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
// to configure typescript paths alias in vite (@/components)
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		TanStackRouterVite({
			// Enable automatic code splitting for routes, improving initial load time and overall user experience.
			// This splits the application into smaller chunks, loading only the necessary code for each route.
			// Additionally, preloading hints are automatically added to improve navigation speed.
			autoCodeSplitting: true,
		}),
		react(),
		tsconfigPaths(),
		tailwindcss(),
	],
});
