// The fields every project and blog post must (or may) have.
// If a required field is missing or misspelled, the build stops with a clear error.
// Keep in sync with .pages.yml, which builds the editing forms in Pages CMS.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Uploaded images live in public/media and are referenced as "/media/<file>".
const mediaPath = z.string().startsWith('/');

// Pages CMS may save an empty box as "" or null; treat that as "not filled in".
const blank = (value: unknown) => (value === '' || value === null ? undefined : value);
const optional = <T extends z.ZodType>(schema: T) => z.preprocess(blank, schema.optional());

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		category: z.enum(['data-science', 'dashboards', 'systems']),
		tools: z.preprocess(blank, z.array(z.string()).default([])),
		date: z.coerce.date(),
		cover: optional(mediaPath),
		coverAlt: optional(z.string()),
		featured: z.preprocess(blank, z.boolean().default(false)),
		github: optional(z.url()),
		liveUrl: optional(z.url()),
		notebookUrl: optional(z.url()),
		draft: z.preprocess(blank, z.boolean().default(false)),
	}),
});

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		date: z.coerce.date(),
		role: z.enum(['hosted', 'attended', 'volunteered']),
		location: optional(z.string()),
		organizer: optional(z.string()),
		cover: optional(mediaPath),
		coverAlt: optional(z.string()),
		photos: z.preprocess(blank, z.array(z.object({ src: mediaPath, alt: z.string() })).default([])),
		link: optional(z.url()),
		draft: z.preprocess(blank, z.boolean().default(false)),
	}),
});

export const collections = { projects, blog };
