export async function load() {
	const modules = import.meta.glob('./posts/*.md?raw');
	const posts = Object.entries(modules).map(([path, module]) => {
		// @ts-ignore
		return { slug: path.split('/').pop().replace('.md', '') };
	});
	console.log(posts);
	return { posts };
}
