export function formatDate(date: string) {
	return Intl.DateTimeFormat("en-GB", {
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(new Date(date));
}
