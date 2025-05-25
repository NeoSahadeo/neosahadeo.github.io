<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	let { data }: { data: any } = $props();
</script>

<table class="table">
	<thead>
		<tr>
			<th class="text-start">Date</th>
			<th class="text-start">Title</th>
			<th class="hidden text-start md:flex">Tags</th>
		</tr>
	</thead>
	<tbody>
		{#each data.posts as post}
			{#if post.meta && post.meta.published}
				<tr>
					<td class="text-nowrap" style="font-family: 'Regular Roboto Mono';">
						<a href={`/journal/${post.slug}`}>
							{`[${String(new Date(post.meta.date))
								.match(/^(\S*| ){1,6}\d+/)
								?.slice(0, -1)}]`}
						</a>
					</td>
					<td>
						<a href={`/journal/${post.slug}`}>
							{post.meta.title}
						</a>
					</td>
					<td>
						<ul
							class="hidden gap-1 py-2 md:flex"
							style="list-style-type: none; !important; padding: 0px !important;"
						>
							{#each post.meta.tags as tag}
								<li><a href="#"><Tag content={tag} /></a></li>
							{/each}
						</ul>
					</td>
				</tr>
			{/if}
		{/each}
	</tbody>
</table>
