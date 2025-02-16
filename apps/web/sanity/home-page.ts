import type { InferResultType } from "groqd";
import { q, runQuery } from "./client";
import { heroFragment } from "./hero";

export const homePageQuery = q.star
	.filterByType("homePage")
	.slice(0)
	.project((sub) => ({
		seo: true,
		hero: sub.field("hero").project(heroFragment),
	}))
	.notNull();

export function getHomePage() {
	return runQuery(homePageQuery);
}

export type HomePage = InferResultType<typeof homePageQuery>;
