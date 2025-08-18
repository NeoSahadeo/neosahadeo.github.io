<script lang="ts">
	let { link, src, title, desc } = $props();
</script>

<a href={link} target="_blank">
	<div class="bg-base-200 flex h-fit w-fit flex-col gap-3 rounded-lg px-2 py-1">
		<div class="flex flex-row items-center justify-between gap-3">
			<div>
				<h2 class="text-2xl font-bold">{title}</h2>
				<p>{desc}</p>
			</div>
			<div
				style={`background: url(${src}); background-size: cover; background-repeat: no-repeat;`}
				class="max-h-16 min-h-16 max-w-16 min-w-16 rounded-lg"
			></div>
		</div>
	</div>
</a>
