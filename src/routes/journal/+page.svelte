<script lang="ts">
	let { data }: { data: any } = $props();
	$effect(() => {
		console.log(data.posts);
	});
</script>

<ul>
	{#each data.posts as post}
		{#if post.meta}
			<li><a href={`/journal/${post.slug}`}>{post.meta.title}</a></li>
		{/if}
	{/each}
</ul>
