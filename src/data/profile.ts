// Home page and footer details. Edit them in Pages CMS ("Profile") or directly in profile.json.
// This file checks the JSON so a typo stops the build with a clear error instead of breaking the page.
import { z } from 'astro/zod';
import data from './profile.json';

// Pages CMS may save an empty box as null; treat it as ''.
const text = z
	.string()
	.nullish()
	.transform((value) => value ?? '');
const link = z.union([z.url(), z.literal('')]).nullish().transform((value) => value ?? '');

const schema = z.object({
	name: z.string().min(1),
	headline: z.string().min(1),
	location: text,
	photo: text, // e.g. "/media/profile.jpg"; empty shows initials
	bio: z.array(z.string()).min(1),
	contactNote: text,
	email: z.union([z.email(), z.literal('')]).nullish().transform((value) => value ?? ''),
	linkedin: link,
	github: link,
	cvUrl: text, // e.g. "/media/cv.pdf"; empty hides the button
	skills: z.array(
		z.object({
			category: z.enum(['data-science', 'dashboards', 'systems']),
			items: z.array(z.string()),
		}),
	),
});

export const profile = schema.parse(data);
