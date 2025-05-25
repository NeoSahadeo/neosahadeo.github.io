<script lang="ts">
	let { data }: { data: any } = $props();
</script>

<table class="table">
	<thead>
		<tr>
			<th class="text-start">Date</th>
			<th class="text-start">Title</th>
		</tr>
	</thead>
	<tbody>
		{#each data.posts as post}
			{#if post.meta && post.meta.published}
				<tr>
					<td style="font-family: 'Regular Roboto Mono';">
						{`[${String(new Date(post.meta.date))
							.match(/^(\S*| ){1,6}\d+/)
							?.slice(0, -1)}]`}
					</td>
					<td>
						<a href={`/journal/${post.slug}`}
							><p>
								{post.meta.title}
							</p></a
						>
					</td>
				</tr>
			{/if}
		{/each}
	</tbody>
</table>
