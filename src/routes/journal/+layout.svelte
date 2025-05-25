<script lang="ts">
	import './post.css';
	let { children } = $props();
</script>

<article class="p-3">
	{@render children()}
</article>
