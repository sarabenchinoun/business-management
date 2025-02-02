import { defineField, defineType } from "sanity";

export const seo = defineType({
	name: "seo",
	title: "SEO",
	type: "object",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "SEO Title",
			description: "Title used for search engines and browser tabs",
			validation: (Rule) =>
				Rule.max(60).warning("Should be under 60 characters"),
		}),
		defineField({
			name: "description",
			type: "text",
			title: "SEO Description",
			rows: 3,
			description: "Description for search engines",
			validation: (Rule) =>
				Rule.max(160).warning("Should be under 160 characters"),
		}),
		defineField({
			name: "keywords",
			type: "array",
			title: "Keywords",
			of: [{ type: "string" }],
			description: "Add keywords that describe your page",
		}),
		defineField({
			name: "image",
			type: "imageWithSource",
			title: "Image",
			description: "Image used when sharing on social media",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "canonicalUrl",
			type: "url",
			title: "Canonical URL",
			description:
				"The preferred version of a page for search engines to index",
		}),
	],
});
