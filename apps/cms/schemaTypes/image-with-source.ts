import { defineField, defineType } from "sanity";

export const imageWithSource = defineType({
	name: "imageWithSource",
	title: "Image with source",
	type: "object",
	fields: [
		defineField({
			name: "source",
			title: "Image Source",
			type: "string",
			options: {
				list: [
					{ title: "Upload", value: "upload" },
					{ title: "External URL", value: "url" },
				],
			},
			initialValue: "upload",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "upload",
			title: "Upload Image",
			type: "image",
			options: {
				hotspot: true,
			},
			hidden: ({ parent }) => parent?.source !== "upload",
		}),
		defineField({
			name: "url",
			title: "External Image URL",
			type: "url",
			hidden: ({ parent }) => parent?.source !== "url",
		}),
		{
			name: "alt",
			title: "Alt Text",
			type: "string",
			description:
				"Alternative text for the image, important for accessibility and SEO",
			validation: (Rule) => Rule.required(),
		},
	],
});
