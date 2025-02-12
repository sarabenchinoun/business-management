import { expect, test } from "vitest";
import { formatDate } from "./format-date";

test("formatDate outputs the correct date", () => {
	const date = "2024-11-03T05:45:46.927Z";
	const formattedDate = formatDate(date);
	expect(formattedDate).toBe("3 November 2024");
});
