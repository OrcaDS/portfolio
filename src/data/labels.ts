// Display names for project categories and event roles, plus shared helpers.
export const categories = {
	'data-science': 'Data Science',
	dashboards: 'Dashboards',
	systems: 'Systems',
} as const;

export const roles = {
	hosted: 'Hosted',
	attended: 'Attended',
	volunteered: 'Volunteered',
} as const;

export type Category = keyof typeof categories;
export type Role = keyof typeof roles;

export function formatDate(date: Date) {
	return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', timeZone: 'UTC' });
}

export function byNewest<T extends { data: { date: Date } }>(a: T, b: T) {
	return b.data.date.getTime() - a.data.date.getTime();
}
