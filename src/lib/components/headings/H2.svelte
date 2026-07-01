<script lang="ts">
	let { title, class: cls = '' } = $props();
</script>

<h2 class={'mb-3 text-3xl font-semibold ' + cls}>{title}</h2>
