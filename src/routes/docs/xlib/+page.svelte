<script lang="ts">
	import { onMount } from 'svelte';
	let htmlContent = $state();
	onMount(async () => {
		const response = await fetch('/external/docs/libX11.html');
		htmlContent = await response.text();
	});
</script>

<h1 class="text-xl">THIS IS A WORKING DEMO. I AM WORKING ON A RENDERING MODEL(S)</h1>

{@html htmlContent}
