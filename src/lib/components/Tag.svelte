<script lang="ts">
	let { bg = 'black', content = 'none', text = 'white' } = $props();
</script>

<div style={`background-color:${bg}; color:${text}`} class="w-min rounded-full px-2 text-nowrap">
	{content}
</div>
