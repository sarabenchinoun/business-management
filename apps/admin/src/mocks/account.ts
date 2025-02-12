import { http, HttpResponse } from "msw";

export const accountHandlers = [
	http.get("/account", () => {
		return HttpResponse.json({
			id: "1",
			name: "Sara Benchinoun",
			email: "me@sarabenchinoun.com",
		});
	}),
];
