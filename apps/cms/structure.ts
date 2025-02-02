import type { StructureBuilder } from "sanity/structure";
import { singletonTypes } from "./schemaTypes";

export function structure(S: StructureBuilder) {
	return S.list()
		.title("Content")
		.items([
			S.listItem()
				.title("Home Page")
				.id("homePage")
				.child(S.document().schemaType("homePage").documentId("homePage")),
			// Filter out singleton types from the document type list
			...S.documentTypeListItems().filter(
				(listItem) =>
					!singletonTypes.some((schema) => schema.name === listItem.getId()),
			),
		]);
}
