<script lang="ts">
	import './post.css';
	let { children } = $props();
</script>

<article class="min-h-dvh p-3">
	{@render children()}
</article>
