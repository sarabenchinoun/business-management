import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	loader: async () => {
		const res = await fetch("/account");
		const json = await res.json();
		return json;
	},
	component: RootComponent,
});

function RootComponent() {
	const account = Route.useLoaderData();
	return (
		<>
			<div className="flex gap-2 p-2 text-lg">
				<Link
					to="/"
					activeProps={{
						className: "font-bold",
					}}
					activeOptions={{ exact: true }}
				>
					Home
				</Link>{" "}
				<Link
					to="/about"
					activeProps={{
						className: "font-bold",
					}}
				>
					About
				</Link>
			</div>
			<hr />
			<h1>Account</h1>
			<p>{account.name}</p>
			<p>{account.email}</p>
			<hr />
			<Outlet />
			<TanStackRouterDevtools position="bottom-right" />
		</>
	);
}
