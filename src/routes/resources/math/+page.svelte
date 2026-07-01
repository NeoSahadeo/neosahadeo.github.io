<script lang="ts">
	import { url_resolver } from "$lib/scripts/urlResolver";


	const links = [
		{
		name: "Calculus",
				link: url_resolver('self') + 'resources/math/calculus'
		}
	]
</script>

<h1 class="relative text-2xl font-bold md:text-4xl mb-4">
	Mathematics Resources
</h1>
<ul>
{#each links as l}
<li class="list-disc">
<a class="text-blue-300" href={l.link}>{l.name}</a>
</li>
{/each}
</ul>
