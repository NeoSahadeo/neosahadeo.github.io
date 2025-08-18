<script lang="ts">
	import PageTitle from '$lib/components/headings/PageTitle.svelte';
	import Project from '$lib/components/projects/Project.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.title = 'Projects | Neo Sahadeo';
	});
</script>

<section class="flex flex-col px-4 md:px-0">
	<PageTitle title={'Projects'} />
	<p class="mt-2 mb-4">Awesome pieces of work that I've created or worked on.</p>
	<div class="flex flex-col gap-2">
		<Project
			link="https://github.com/NeoSahadeo/Radson?tab=readme-ov-file"
			title="Radson"
			desc="A set of useful functions to make interacting with Sonarr and Radarr a joy."
			src="https://i.imgur.com/ruZFtSF.png"
		/>
	</div>
</section>
