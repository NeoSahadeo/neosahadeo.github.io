<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1 class="text-3xl font-black">{$page.status}: {$page?.error.message}</h1>
