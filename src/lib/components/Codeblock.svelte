<script lang="ts">
	let { lang = '', children } = $props();
</script>

<pre class="hljs rounded-md px-3 py-3"><code
		class={'language-' + lang}>{@render children()}</code></pre>
