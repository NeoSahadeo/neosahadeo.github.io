<script lang="ts">
	import Tag from './Tag.svelte';
	let loaded = $state(false);
	const shared_img_c = 'h-52 w-full rounded-lg';

	let {
		src = 'https://i.imgur.com/bTmXEak.jpeg',
		link = '#',
		desc = '',
		title = '',
		tags = [],
		alt = ''
	} = $props();
</script>

<div class="w-min">
	<a href={link}>
		<div
			class="bg-primary text-primary-content flex h-full max-h-96 w-96 flex-col gap-4 rounded-lg px-2 py-2 pb-4"
		>
			{#if !loaded}
				<div class={`skeleton ${shared_img_c}`}></div>
				<div class="flex justify-between">
					<div class="skeleton h-4 w-20"></div>
					<div class="skeleton h-4 w-20"></div>
					<div class="skeleton h-4 w-20"></div>
					<div class="skeleton h-4 w-20"></div>
				</div>
				<div class="skeleton h-4 w-28"></div>
				<div class="skeleton h-4 w-full"></div>
				<div class="skeleton h-4 w-full"></div>
			{/if}

			<img
				class={`object-cover ${shared_img_c} ${loaded ? 'block' : 'hidden'}`}
				{alt}
				{src}
				onload={() => {
					loaded = true;
				}}
			/>
			{#if loaded}
				<div class="flex gap-2">
					{#each tags as tag}
						<Tag bg={tag.bg} content={tag.content} text={tag.text} />
					{/each}
				</div>
				<h2 class="h-4 text-xl font-black text-nowrap">{title}</h2>
				<p class="w-full overflow-hidden text-ellipsis">
					{desc}
				</p>
			{/if}
		</div>
	</a>
</div>
