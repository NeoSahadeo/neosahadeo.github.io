<script lang="ts">
	import { onMount } from 'svelte';
	import './stage/stage.css';
	import { Weather } from './stage/weather';

	let main_stage = $state<HTMLCanvasElement>();

	onMount(() => {
		if (main_stage) new Weather(main_stage);
	});
</script>

<canvas bind:this={main_stage} id="main_stage"> </canvas>
