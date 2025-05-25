import type { PageLoad } from './$types';

export async function load({ params }: { params: any }) {
	const modules = import.meta.glob('../posts/*.md');
	const match = Object.entries(modules).find(([path]) => path.endsWith(`${params.slug}.md`));
	if (match) {
		const data: any = await match[1]();
		return {
			post: {
				meta: data.metadata,
				content: data.default
			}
		};
	} else {
		return { status: 404 };
	}
}
