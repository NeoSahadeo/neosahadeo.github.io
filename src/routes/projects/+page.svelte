<script lang="ts">
	import Project from '$lib/components/Project.svelte';
</script>

<h1 style="font-size: 3em;" class="pt-10 pl-3 font-black md:pl-10">Projects</h1>
<div class="flex flex-wrap gap-10 py-10 md:px-10">
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
		src="https://raw.githubusercontent.com/NeoSahadeo/Palooza/refs/heads/main/src/lib/assets/paloozaLogo.png"
		title="Palooza Ext"
		desc="A remote-browser controller for use of content sync-up with friends!"
		link="https://codeberg.org/NeoSahadeo/Palooza"
		tags={[
			{ bg: 'orange', content: 'svelte' },
			{ bg: 'blue', content: 'TypeScript' }
		]}
	/>
	<Project
		src="https://i.imgur.com/lqo3Bou.png"
		title="Deadsec"
		desc="A pipewire wire configuration script."
		link="https://gist.github.com/NeoSahadeo/6febda30e303e994f718d344f7a55bfb"
		tags={[{ bg: 'teal', content: 'shell' }]}
	/>
	<Project
		src="https://i.imgur.com/luevsta.png"
		title="Oto"
		desc="The sound platform."
		link="https://github.com/NeoSahadeo/DKIT-Sem1-Website/tree/main/website"
		tags={[
			{ bg: 'orange', content: 'svelte' },
			{ bg: 'blue', content: 'TypeScript' }
		]}
	/>
	<Project
		src="https://i.imgur.com/lB1Uj5r.jpeg"
		title="16Bit-Python-CPU"
		desc="An authentic 16-bit CPU written in Python"
		link="https://github.com/NeoSahadeo/16Bit-Python-CPU"
		tags={[{ bg: 'blue', content: 'Python' }]}
	/>
	<Project
		src="https://i.imgur.com/oFGfYTu.jpeg"
		title="Sphinx Setup Template"
		desc="A few script files that auto-build and preview sphinx sites."
		link="https://github.com/NeoSahadeo/sphinx-setup"
		tags={[
			{ bg: 'blue', content: 'Python' },
			{ bg: 'teal', content: 'shell' }
		]}
	/>
	<Project
		src="https://camo.githubusercontent.com/6c2ae069a15725f1d4a36f16fc022c87d9690a799b9948e2945e52bd3c878861/68747470733a2f2f692e696d6775722e636f6d2f506f7a743569452e706e67"
		title="Python Signalling Server"
		desc=" This is a Python signalling server that uses rooms to connect clients together. "
		link="https://github.com/NeoSahadeo/Python-Signalling-Server"
		tags={[
			{ bg: 'blue', content: 'Python' },
			{ bg: 'red', content: 'signalling-server', text: 'black' }
		]}
	/>
	<Project
		src="https://camo.githubusercontent.com/ee142e1027f74a8ef8c69e9b0a7d8dc4eed093c5a99321454dcf43307a9d51d1/68747470733a2f2f696d6775722e636f6d2f566e37694b69342e706e67"
		title="Nvim Image Previewer"
		desc="An image preview for nvim-tree that uses feh."
		link="https://github.com/NeoSahadeo/image-preview.nvim"
		tags={[{ bg: 'blue', content: 'lua' }]}
	/>
	<Project
		src="https://i.imgur.com/4vV8VTt.png"
		title="Helios3"
		desc="Helios3 is a password manager developed by Me."
		link="https://github.com/NeoSahadeo/Helios3"
		tags={[
			{ bg: 'orange', content: 'svelte' },
			{ bg: 'yellow', content: 'Javascript', text: 'black' }
		]}
	/>
</div>
