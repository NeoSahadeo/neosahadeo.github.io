export async function load() {
	const modules = import.meta.glob('./posts/*.md');
	let posts = [];
	for (const p in modules) {
		// @ts-ignore
		const path = p.split('/').pop().replace('.md', '');
		const result: any = await modules[p]();
		posts.push({
			slug: path,
			meta: result.metadata,
			default: result.default
		});
	}
	return { posts };
}
