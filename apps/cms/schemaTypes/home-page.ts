import { defineField, defineType } from "sanity";

export const homePage = defineType({
	name: "homePage",
	title: "Home Page",
	type: "document",
	fields: [
		defineField({
			name: "seo",
			type: "seo",
			title: "SEO",
			description: "Search engine optimization settings for the home page",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "hero",
			type: "hero",
			title: "Hero",
			validation: (Rule) => Rule.required(),
		}),
	],
	validation: (Rule) => Rule.required(),
	preview: {
		select: {
			title: "seo.title",
			description: "seo.description",
		},
		prepare(selection) {
			const { title, description } = selection;
			return {
				title: title || "Untitled Home Page",
				description: description
					? `${description.substring(0, 50)}...`
					: "No description",
			};
		},
	},
});
