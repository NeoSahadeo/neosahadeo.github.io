<script lang="ts">
	let { data }: { data: any } = $props();
</script>

{#if data.post}
	<h1 class="text-2xl font-black">{data.post.meta.title}</h1>
	<svelte:component this={data.post.content} />
{/if}
