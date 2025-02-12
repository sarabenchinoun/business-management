import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";

export const accountHandlers = [
	http.get("/account", () => {
		const firstName = faker.person.firstName();
		const lastName = faker.person.lastName();
		return HttpResponse.json({
			id: crypto.randomUUID(),
			name: faker.person.fullName({ firstName, lastName }),
			email: faker.internet.email({ firstName, lastName }),
			role: faker.helpers.arrayElement(["admin", "user", "guest"]),
			created_at: faker.date.past().toISOString(),
			updated_at: faker.date.recent().toISOString(),
		});
	}),
];
