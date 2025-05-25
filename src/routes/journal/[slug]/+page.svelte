<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	let { data }: { data: any } = $props();
</script>

{#if data.post}
	<h1 class="font-black underline" style="font-size: 2em !important;">{data.post.meta.title}</h1>
	<ul class="flex gap-1 py-2" style="list-style-type: none; !important; padding: 0px !important;">
		{#each data.post.meta.tags as tag}
			<li><Tag content={tag} /></li>
		{/each}
	</ul>
	<div class="py-5">
		<div class="max-w-fit rounded border-1 border-dashed p-3">
			{`${String(new Date(data.post.meta.date))
				.match(/^(\S*| ){1,6}\d+/)
				?.slice(0, -1)}`}
			<br />
			Author: Neo Sahadeo
		</div>
	</div>
	<svelte:component this={data.post.content} />
{/if}
