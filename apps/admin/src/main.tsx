import { RouterProvider, createRouter } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "@/styles/tailwind.css";

// Set up a Router instance
const router = createRouter({
	routeTree,
	defaultPreload: "intent",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById("app") as HTMLElement;

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	enableMocking().then(() => {
		root.render(<RouterProvider router={router} />);
	});
}

async function enableMocking() {
	if (import.meta.env.MODE !== "mock") {
		return;
	}

	const { worker } = await import("./mocks/browser");

	// `worker.start()` returns a Promise that resolves
	// once the Service Worker is up and ready to intercept requests.
	return worker.start({
		onUnhandledRequest: "bypass",
	});
}
