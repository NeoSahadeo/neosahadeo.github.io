<script lang="ts">
	import '../app.css';
	import Stage from '$lib/components/Stage.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<Stage />
<Header />
<main>
	{@render children()}
</main>
<Footer />
