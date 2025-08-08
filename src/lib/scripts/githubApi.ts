import type { Github } from '../types/Github';
import type { Tutorial } from '../types/Tutorial';

export async function fetch_commits(branch = '') {
	try {
		const response = await fetch(
			'https://api.github.com/repos/NeoSahadeo/neosahadeo.github.io/commits' + branch
		);
		if (response.ok) return await response.json();
	} catch (err) {
		console.log(err);
		return null;
	}
}

export async function fetch_tutorials() {
	const data = (await fetch_commits()) as any[];
	const arr = [] as any as [Github, Tutorial][];
	data.forEach((e: unknown) => {
		const match = (e as Github).commit.message.match(/(?<=\[tutorial\].*){(.|\n)*}/gm);
		if (match) arr.push([e as Github, JSON.parse(match[0])]);
	});
	return arr;
}
