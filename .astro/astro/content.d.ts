declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"articles": {
"2012-06-14-hqlo.md": {
	id: "2012-06-14-hqlo.md";
  slug: "2012-06-14-hqlo";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2012-06-19-rrh.md": {
	id: "2012-06-19-rrh.md";
  slug: "2012-06-19-rrh";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2013-03-19-injprev.md": {
	id: "2013-03-19-injprev.md";
  slug: "2013-03-19-injprev";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2014-02-19-hqlo.md": {
	id: "2014-02-19-hqlo.md";
  slug: "2014-02-19-hqlo";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2015-12-17-worlddevel.md": {
	id: "2015-12-17-worlddevel.md";
  slug: "2015-12-17-worlddevel";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2017-10-24-plosone.md": {
	id: "2017-10-24-plosone.md";
  slug: "2017-10-24-plosone";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2018-02-21-rheumatology.md": {
	id: "2018-02-21-rheumatology.md";
  slug: "2018-02-21-rheumatology";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2018-03-23-oac.md": {
	id: "2018-03-23-oac.md";
  slug: "2018-03-23-oac";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2018-07-04-anzjph.md": {
	id: "2018-07-04-anzjph.md";
  slug: "2018-07-04-anzjph";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2018-12-13-oac.md": {
	id: "2018-12-13-oac.md";
  slug: "2018-12-13-oac";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2019-09-09-plosmed.md": {
	id: "2019-09-09-plosmed.md";
  slug: "2019-09-09-plosmed";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2019-10-04-nzmj.md": {
	id: "2019-10-04-nzmj.md";
  slug: "2019-10-04-nzmj";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2019-12-13-nzmj.md": {
	id: "2019-12-13-nzmj.md";
  slug: "2019-12-13-nzmj";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2020-02-07-nzmj.md": {
	id: "2020-02-07-nzmj.md";
  slug: "2020-02-07-nzmj";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2020-05-20-jarthroplasty.md": {
	id: "2020-05-20-jarthroplasty.md";
  slug: "2020-05-20-jarthroplasty";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2020-05-26-anzjsurg.md": {
	id: "2020-05-26-anzjsurg.md";
  slug: "2020-05-26-anzjsurg";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2020-08-17-currrheumrep.md": {
	id: "2020-08-17-currrheumrep.md";
  slug: "2020-08-17-currrheumrep";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2020-08-18-jarthroplasty.md": {
	id: "2020-08-18-jarthroplasty.md";
  slug: "2020-08-18-jarthroplasty";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2020-09-01-arthroplastytoday.md": {
	id: "2020-09-01-arthroplastytoday.md";
  slug: "2020-09-01-arthroplastytoday";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2020-09-21-jarthroplasty.md": {
	id: "2020-09-21-jarthroplasty.md";
  slug: "2020-09-21-jarthroplasty";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2020-10-13-jarthroplasty.md": {
	id: "2020-10-13-jarthroplasty.md";
  slug: "2020-10-13-jarthroplasty";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2020-12-22-oacopen-1.md": {
	id: "2020-12-22-oacopen-1.md";
  slug: "2020-12-22-oacopen-1";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2020-12-22-oacopen-2.md": {
	id: "2020-12-22-oacopen-2.md";
  slug: "2020-12-22-oacopen-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2021-01-29-lancetwpac.md": {
	id: "2021-01-29-lancetwpac.md";
  slug: "2021-01-29-lancetwpac";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2021-05-20-jarthroplasty.md": {
	id: "2021-05-20-jarthroplasty.md";
  slug: "2021-05-20-jarthroplasty";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2021-08-07-muscsciprac.md": {
	id: "2021-08-07-muscsciprac.md";
  slug: "2021-08-07-muscsciprac";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2022-01-29-vih.md": {
	id: "2022-01-29-vih.md";
  slug: "2022-01-29-vih";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2022-05-10-jospt.md": {
	id: "2022-05-10-jospt.md";
  slug: "2022-05-10-jospt";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2022-05-16-bmjopen.md": {
	id: "2022-05-16-bmjopen.md";
  slug: "2022-05-16-bmjopen";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2022-12-15-archphysio.md": {
	id: "2022-12-15-archphysio.md";
  slug: "2022-12-15-archphysio";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2023-01-03-jphysio.md": {
	id: "2023-01-03-jphysio.md";
  slug: "2023-01-03-jphysio";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2023-03-01-ahehp.md": {
	id: "2023-03-01-ahehp.md";
  slug: "2023-03-01-ahehp";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2023-04-24-acr.md": {
	id: "2023-04-24-acr.md";
  slug: "2023-04-24-acr";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2023-05-19-injprev.md": {
	id: "2023-05-19-injprev.md";
  slug: "2023-05-19-injprev";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2023-05-22-musccare.md": {
	id: "2023-05-22-musccare.md";
  slug: "2023-05-22-musccare";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2023-07-01-jphysio.md": {
	id: "2023-07-01-jphysio.md";
  slug: "2023-07-01-jphysio";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2023-08-28-jhandther.md": {
	id: "2023-08-28-jhandther.md";
  slug: "2023-08-28-jhandther";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2023-11-09-bmjopen.md": {
	id: "2023-11-09-bmjopen.md";
  slug: "2023-11-09-bmjopen";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2023-11-16-fampract.md": {
	id: "2023-11-16-fampract.md";
  slug: "2023-11-16-fampract";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};
"conferences": {
"acr-2024.md": {
	id: "acr-2024.md";
  slug: "acr-2024";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"anzmusc-2023.md": {
	id: "anzmusc-2023.md";
  slug: "anzmusc-2023";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"emcr-2021.md": {
	id: "emcr-2021.md";
  slug: "emcr-2021";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"forum-2021.md": {
	id: "forum-2021.md";
  slug: "forum-2021";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"ispor-2016.md": {
	id: "ispor-2016.md";
  slug: "ispor-2016";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"nzoa-2019.md": {
	id: "nzoa-2019.md";
  slug: "nzoa-2019";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"oarnet-2022-emcr.md": {
	id: "oarnet-2022-emcr.md";
  slug: "oarnet-2022-emcr";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"oarnet-2022.md": {
	id: "oarnet-2022.md";
  slug: "oarnet-2022";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"oarnet-2023.md": {
	id: "oarnet-2023.md";
  slug: "oarnet-2023";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"oarsi-2016.md": {
	id: "oarsi-2016.md";
  slug: "oarsi-2016";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"oarsi-2019-cea.md": {
	id: "oarsi-2019-cea.md";
  slug: "oarsi-2019-cea";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"oarsi-2019-mcda.md": {
	id: "oarsi-2019-mcda.md";
  slug: "oarsi-2019-mcda";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"oarsi-2019-projections.md": {
	id: "oarsi-2019-projections.md";
  slug: "oarsi-2019-projections";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"oarsi-2024-costs.md": {
	id: "oarsi-2024-costs.md";
  slug: "oarsi-2024-costs";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"oarsi-2024-nlp.md": {
	id: "oarsi-2024-nlp.md";
  slug: "oarsi-2024-nlp";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"oarsi-2024-oa.md": {
	id: "oarsi-2024-oa.md";
  slug: "oarsi-2024-oa";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
"smdm-2016.md": {
	id: "smdm-2016.md";
  slug: "smdm-2016";
  body: string;
  collection: "conferences";
  data: InferEntrySchema<"conferences">
} & { render(): Render[".md"] };
};
"old-projects": {
"bmi.md": {
	id: "bmi.md";
  slug: "bmi";
  body: string;
  collection: "old-projects";
  data: InferEntrySchema<"old-projects">
} & { render(): Render[".md"] };
"nzmoa-model.md": {
	id: "nzmoa-model.md";
  slug: "nzmoa-model";
  body: string;
  collection: "old-projects";
  data: InferEntrySchema<"old-projects">
} & { render(): Render[".md"] };
"oa-health-losses.md": {
	id: "oa-health-losses.md";
  slug: "oa-health-losses";
  body: string;
  collection: "old-projects";
  data: InferEntrySchema<"old-projects">
} & { render(): Render[".md"] };
"primary-care-oa.md": {
	id: "primary-care-oa.md";
  slug: "primary-care-oa";
  body: string;
  collection: "old-projects";
  data: InferEntrySchema<"old-projects">
} & { render(): Render[".md"] };
"tja.md": {
	id: "tja.md";
  slug: "tja";
  body: string;
  collection: "old-projects";
  data: InferEntrySchema<"old-projects">
} & { render(): Render[".md"] };
};
"other-publications": {
"cl-matching-v1.md": {
	id: "cl-matching-v1.md";
  slug: "cl-matching-v1";
  body: string;
  collection: "other-publications";
  data: InferEntrySchema<"other-publications">
} & { render(): Render[".md"] };
"cl-matching-v2-analysis-plan.md": {
	id: "cl-matching-v2-analysis-plan.md";
  slug: "cl-matching-v2-analysis-plan";
  body: string;
  collection: "other-publications";
  data: InferEntrySchema<"other-publications">
} & { render(): Render[".md"] };
"cmor-evidence-table.md": {
	id: "cmor-evidence-table.md";
  slug: "cmor-evidence-table";
  body: string;
  collection: "other-publications";
  data: InferEntrySchema<"other-publications">
} & { render(): Render[".md"] };
"conversation-article.md": {
	id: "conversation-article.md";
  slug: "conversation-article";
  body: string;
  collection: "other-publications";
  data: InferEntrySchema<"other-publications">
} & { render(): Render[".md"] };
"costs-after-oa-diagnosis.md": {
	id: "costs-after-oa-diagnosis.md";
  slug: "costs-after-oa-diagnosis";
  body: string;
  collection: "other-publications";
  data: InferEntrySchema<"other-publications">
} & { render(): Render[".md"] };
"health-equity-mcnz.md": {
	id: "health-equity-mcnz.md";
  slug: "health-equity-mcnz";
  body: string;
  collection: "other-publications";
  data: InferEntrySchema<"other-publications">
} & { render(): Render[".md"] };
"knee-caps-sap.md": {
	id: "knee-caps-sap.md";
  slug: "knee-caps-sap";
  body: string;
  collection: "other-publications";
  data: InferEntrySchema<"other-publications">
} & { render(): Render[".md"] };
"map-evaluation-cycle-1.md": {
	id: "map-evaluation-cycle-1.md";
  slug: "map-evaluation-cycle-1";
  body: string;
  collection: "other-publications";
  data: InferEntrySchema<"other-publications">
} & { render(): Render[".md"] };
"map-evaluation-cycle-2.md": {
	id: "map-evaluation-cycle-2.md";
  slug: "map-evaluation-cycle-2";
  body: string;
  collection: "other-publications";
  data: InferEntrySchema<"other-publications">
} & { render(): Render[".md"] };
"multimorbidity-systematic-review-protocol.md": {
	id: "multimorbidity-systematic-review-protocol.md";
  slug: "multimorbidity-systematic-review-protocol";
  body: string;
  collection: "other-publications";
  data: InferEntrySchema<"other-publications">
} & { render(): Render[".md"] };
"oa-matching-analysis-plan.md": {
	id: "oa-matching-analysis-plan.md";
  slug: "oa-matching-analysis-plan";
  body: string;
  collection: "other-publications";
  data: InferEntrySchema<"other-publications">
} & { render(): Render[".md"] };
"oa-primary-care-matching-report.md": {
	id: "oa-primary-care-matching-report.md";
  slug: "oa-primary-care-matching-report";
  body: string;
  collection: "other-publications";
  data: InferEntrySchema<"other-publications">
} & { render(): Render[".md"] };
"opioid-dose-response-analysis-plan.md": {
	id: "opioid-dose-response-analysis-plan.md";
  slug: "opioid-dose-response-analysis-plan";
  body: string;
  collection: "other-publications";
  data: InferEntrySchema<"other-publications">
} & { render(): Render[".md"] };
"opioids-matching-report.md": {
	id: "opioids-matching-report.md";
  slug: "opioids-matching-report";
  body: string;
  collection: "other-publications";
  data: InferEntrySchema<"other-publications">
} & { render(): Render[".md"] };
"opti-ok-analysis-plan.md": {
	id: "opti-ok-analysis-plan.md";
  slug: "opti-ok-analysis-plan";
  body: string;
  collection: "other-publications";
  data: InferEntrySchema<"other-publications">
} & { render(): Render[".md"] };
};
"post": {
"astrowind-template-in-depth.mdx": {
	id: "astrowind-template-in-depth.mdx";
  slug: "astrowind-template-in-depth";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".mdx"] };
"get-started-website-with-astro-tailwind-css.md": {
	id: "get-started-website-with-astro-tailwind-css.md";
  slug: "get-started-website-with-astro-tailwind-css";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"how-to-customize-astrowind-to-your-brand.md": {
	id: "how-to-customize-astrowind-to-your-brand.md";
  slug: "how-to-customize-astrowind-to-your-brand";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"landing.md": {
	id: "landing.md";
  slug: "landing";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"markdown-elements-demo-post.mdx": {
	id: "markdown-elements-demo-post.mdx";
  slug: "markdown-elements-demo-post";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".mdx"] };
"useful-resources-to-create-websites.md": {
	id: "useful-resources-to-create-websites.md";
  slug: "useful-resources-to-create-websites";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
};
"projects": {
"01-hrc-programme.md": {
	id: "01-hrc-programme.md";
  slug: "01-hrc-programme";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"02-sf6d-preferences.md": {
	id: "02-sf6d-preferences.md";
  slug: "02-sf6d-preferences";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"03-opioid-use.md": {
	id: "03-opioid-use.md";
  slug: "03-opioid-use";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"04-acl-injuries.md": {
	id: "04-acl-injuries.md";
  slug: "04-acl-injuries";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"authors": {
"abbott-jh": {
	id: "abbott-jh";
  collection: "authors";
  data: InferEntrySchema<"authors">
};
"wilson-r": {
	id: "wilson-r";
  collection: "authors";
  data: InferEntrySchema<"authors">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
