<script lang="ts">
	import Project from '$lib/components/Project.svelte';
</script>

<div class="flex flex-wrap gap-10 px-10 py-10">
	<Project
		src="https://camo.githubusercontent.com/891da8033df20d51bc7a66c02e8e21c4227849eaf0da78fffd961883f97063e7/68747470733a2f2f692e696d6775722e636f6d2f495171513775302e706e67"
		title="Sextant"
		desc="A Discord Mod focused on better streaming, performance, and privacy. "
		link="https://codeberg.org/NeoSahadeo/Sextant"
		tags={[
			{ bg: 'blue', content: 'TypeScript' },
			{ bg: 'lightblue', content: 'electron', text: 'black' }
		]}
	/>
	<Project
		src="https://camo.githubusercontent.com/ee142e1027f74a8ef8c69e9b0a7d8dc4eed093c5a99321454dcf43307a9d51d1/68747470733a2f2f696d6775722e636f6d2f566e37694b69342e706e67"
		title="Nvim Image Previewer"
		desc="An image preview for nvim-tree that uses feh."
		link="https://github.com/NeoSahadeo/image-preview.nvim"
		tags={[{ bg: 'blue', content: 'lua' }]}
	/>
</div>
