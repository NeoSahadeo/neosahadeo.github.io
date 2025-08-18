<script lang="ts">
	import StarIcon from '../icons/StarIcon.svelte';
	import LuaIcon from '../icons/LuaIcon.svelte';
	import PythonIcon from '../icons/PythonIcon.svelte';
	import TypescriptIcon from '../icons/TypescriptIcon.svelte';
	import CppIcon from '../icons/CppIcon.svelte';
	import CIcon from '../icons/CIcon.svelte';
	import HTMLIcon from '../icons/HTMLIcon.svelte';
	import JavascriptIcon from '../icons/JavascriptIcon.svelte';
	import CssIcon from '../icons/CSSIcon.svelte';
	import BashIcon from '../icons/BashIcon.svelte';
	import SvelteIcon from '../icons/SvelteIcon.svelte';
	import GoIcon from '../icons/GoIcon.svelte';

	let { link, title, desc, lang, stars } = $props();

	const colorMap: any = {
		Lua: 'blue',
		Python: 'lightblue',
		TypeScript: 'darkblue',
		CppIcon: 'pink',
		C: 'grey',
		HTML: 'orange',
		JavaScript: 'yellow',
		CSS: 'blue',
		Svelte: 'orange',
		Shell: 'teal',
		Go: 'lightblue'
	};

	const iconMap: any = {
		Lua: LuaIcon,
		Python: PythonIcon,
		TypeScript: TypescriptIcon,
		CppIcon: CppIcon,
		C: CIcon,
		HTML: HTMLIcon,
		JavaScript: JavascriptIcon,
		CSS: CssIcon,
		Svelte: SvelteIcon,
		Shell: BashIcon,
		Go: GoIcon
	};
	const Icon = iconMap[lang] ?? null;
</script>

<div class="card-body rounded border-1">
	<div class="flex h-full w-full flex-row">
		<div class="flex-1">
			<h2 class="card-title">{title}</h2>
			<p>{desc}</p>
		</div>
		{#if stars > 0}
			<div class="flex h-min items-center gap-1 font-black">{stars}<StarIcon /></div>
		{/if}
	</div>
	<div class="card-actions items-center justify-end">
		<div class="mr-auto h-min flex-row items-center">
			{#if Icon}
				<Icon />
			{:else}
				{lang}
			{/if}
		</div>
		<a href={link} target="_blank">
			<button class="btn btn-primary">Visit</button>
		</a>
	</div>
</div>
