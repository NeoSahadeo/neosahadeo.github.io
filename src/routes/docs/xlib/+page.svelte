<script lang="ts">
	import { onMount } from 'svelte';
	import { url_resolver } from '$lib/scripts/urlResolver';

	let htmlContent = $state();
	onMount(async () => {
		// const response = await fetch(url_resolver('self') + '/external/docs/libX11.html');
		// htmlContent = await response.text();
		console.log('123');
	});
</script>

<h1 class="text-xl">THIS IS A WORKING DEMO. I AM WORKING ON A RENDERING MODEL(S)</h1>

{@html htmlContent}
