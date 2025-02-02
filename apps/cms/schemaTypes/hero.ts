import { defineField, defineType } from "sanity";

export const hero = defineType({
	name: "hero",
	title: "Hero",
	type: "object",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "subtitle",
			type: "string",
			title: "Subtitle",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "image",
			type: "imageWithSource",
			title: "Image",
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: "title",
			media: "image",
		},
		prepare: (selection) => {
			const { title, media } = selection;
			return {
				title: title,
				subtitle: "Hero",
				media: media,
			};
		},
	},
});
