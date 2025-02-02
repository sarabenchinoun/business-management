import { env } from "@/utils/env";
import { createGroqBuilder, makeSafeQueryRunner } from "groqd";
import { createClient } from "next-sanity";

import type * as SanityTypes from "@business-management/sanity";

export const client = createClient({
	projectId: env.sanityProjectId,
	dataset: env.sanityDataset,
	apiVersion: env.sanityApiVersion,
	useCdn: false,
});

export const runQuery = makeSafeQueryRunner((query) => client.fetch(query));

type SchemaConfig = {
	schemaTypes: SanityTypes.AllSanitySchemaTypes;
	referenceSymbol: typeof SanityTypes.internalGroqTypeReferenceTo;
};

export const q = createGroqBuilder<SchemaConfig>({});
