import { formatDate } from "@/utils/format-date";
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
			</div>
			<hr />
			<h1>Account</h1>
			<p>
				<strong>Name:</strong> {account.name}
			</p>
			<p>
				<strong>Email:</strong> {account.email}
			</p>
			<p>
				<strong>Role:</strong> {account.role}
			</p>
			<p>
				<strong>Created At:</strong> {formatDate(account.created_at)}
			</p>
			<p>
				<strong>Updated At:</strong> {formatDate(account.updated_at)}
			</p>
			<hr />
			<Outlet />
			<TanStackRouterDevtools position="bottom-right" />
		</>
	);
}
