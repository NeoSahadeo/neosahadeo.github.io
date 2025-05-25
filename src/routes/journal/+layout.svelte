<script lang="ts">
	import './post.css';
	let { children } = $props();
</script>

<article class="min-h-dvh p-1 md:p-3">
	{@render children()}
</article>
