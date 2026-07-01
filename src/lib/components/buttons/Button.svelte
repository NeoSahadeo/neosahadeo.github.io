<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { create_ripple } from '$lib/scripts/utils';

	let {
		onclick,
		className,
		children,
		element = $bindable(),
		...other
	}: {
		onclick?: (event: Event) => void;
		className?: string;
		element?: any;
		children: any;
		[key: string]: any;
	} = $props();
</script>

<button
	{...other}
	bind:this={element}
	onclick={(e) => {
		create_ripple(e);
		onclick && onclick(e);
	}}
	class={twMerge('relative btn overflow-hidden', className)}
>
	{@render children()}
</button>
