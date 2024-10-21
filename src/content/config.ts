import { z, defineCollection } from 'astro:content';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const journalArticle = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    journal: z.string(),
    shortjournal: z.string(),
    date: z.coerce.date(),
    authors: z.array(z.string()),
    volume: z.coerce.string(),
    issue: z.coerce.string().optional(),
    pages: z.coerce.string().optional(),
    year: z.coerce.string(),
    doi: z.string().optional(),
  }),
});

const otherPublication = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    with: z.string().optional(),
    description: z.string().optional(),
    published: z.string().optional(),
    date: z.coerce.date(),
    url: z.string().optional(),
  }),
});

const conferencePresentation = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    conference: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    meetingdate: z.string(),
    type: z.string().optional(),
  }),
});

const Authors = defineCollection({
  type: 'data',
  schema: z.object({
    first: z.string(),
    last: z.string(),
    initials: z.string(),
  })
})

export const collections = {
  post: postCollection,
  projects: projectCollection,
  'old-projects': projectCollection,
  articles: journalArticle,
  'other-publications': otherPublication,
  conferences: conferencePresentation,
  authors: Authors
};
