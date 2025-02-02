import type { InferFragmentType } from "groqd";
import { q } from "./client";

export const heroFragment = q.fragmentForType<"hero">().project({
	title: true,
	subtitle: true,
	image: true,
});

export type HeroFragment = InferFragmentType<typeof heroFragment>;
