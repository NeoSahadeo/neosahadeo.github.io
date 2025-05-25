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

	posts.sort((a, b) => {
		const dateA = new Date(a.meta.date).getTime();
		const dateB = new Date(b.meta.date).getTime();
		return dateB - dateA; // Descending order (newest first)
	});

	return { posts };
}
