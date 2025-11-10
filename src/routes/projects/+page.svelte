<script lang="ts">
	import PageTitle from '$lib/components/headings/PageTitle.svelte';
	import Project from '$lib/components/projects/Project.svelte';
	import { onMount } from 'svelte';
	import { fetch_repos } from '$lib/scripts/githubApi';
	import type { Repository } from '$lib/types/Github';
	import { get_max_width, update_loading_state } from '$lib/state.svelte';

	let repos = $state<Repository[]>([]);

	onMount(async () => {
		document.title = 'Projects | Neo Sahadeo';
		update_loading_state('projects', true);
		repos = (await fetch_repos()).items ?? [];
		update_loading_state('projects', false);
	});
</script>

<section class="flex flex-col px-4 md:px-0">
	<PageTitle title={'Projects'} />
	<p class="mt-2 mb-4">The thingies I've made.</p>
	<div
		class="grid gap-2"
		style={`grid-template-columns: repeat(auto-fill, minmax(${get_max_width() < 150 ? 10 : 15}em, 1fr));`}
	>
		{#each repos as repo}
			<Project
				link={repo.html_url}
				title={repo.name}
				desc={repo.description}
				lang={repo.language}
				stars={repo.stargazers_count}
			/>
		{/each}
	</div>
</section>
