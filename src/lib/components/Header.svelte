<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { derived } from 'svelte/store';

	let not_home = $state(false);
	$effect(() => {
		not_home = page.url.pathname !== '/';
	});

	const duration = 500;
	let prev_loc = 0;
	let prev_time = 0;
	let timer: null | number = null;
	let show_header = $state(false);
	let play_header = $state(true);
	let header_height = $state(0);

	const update_header = (e) => {
		const scroll_delta = window.scrollY - prev_loc;
		const time_delta = e.timeStamp - prev_time;

		prev_time = e.timeStamp;
		prev_loc = window.scrollY;

		if (window.scrollY == 0) {
			show_header = false;
			play_header = true;
			return;
		}
		if (window.scrollY - header_height < 0) {
			show_header = true;
			play_header = true;
			return;
		}
		if (time_delta < 30) return; // Scalar speed adjustment

		if (scroll_delta < 0) {
			show_header = true;
			play_header = true;
		} else if (scroll_delta > 0) {
			show_header = false;
			play_header = false;
		}
	};

	onMount(() => {
		document.removeEventListener('scroll', update_header);
		document.addEventListener('scroll', update_header);
	});
</script>

<div
	style={`height:${header_height}px`}
	class={`w-full bg-green-200 ${show_header ? 'static' : 'hidden'}`}
></div>
{#if play_header}
	<header
		bind:clientHeight={header_height}
		in:fly={{ y: -100, duration: duration }}
		out:fly={{ y: -100, duration: duration }}
		class={`header bg-primary text-primary-content top-0 z-50 w-full px-4 py-3 ${show_header ? 'fixed' : 'static'}`}
	>
		<nav class="flex flex-row">
			<ul class="flex flex-row sm:gap-2">
				{#if not_home}
					<li class="bg-base-300 text-primary mr-3 rounded-full px-2 font-bold">
						<a class="flex text-nowrap" href="/"> /~$ NS </a>
					</li>
				{/if}
				<li>
					<a class="flex gap-2 px-3" href="/journal">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
							<path
								fill="currentColor"
								d="M290 32H104a24 24 0 0 0-24 24v400a24 24 0 0 0 24 24h186Zm118 0h-58v448h58a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24"
							/>
						</svg>
						Journal
					</a>
				</li>
				<li>
					<a class="flex gap-2 px-3" href="./projects">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82"
							/>
						</svg>
						Projects
					</a>
				</li>
				<!-- <li> -->
				<!-- 	<a href="/" class="flex gap-2 px-3 text-nowrap"> -->
				<!-- 		<span class="font-black"> /~$ </span> -->
				<!-- 		About -->
				<!-- 	</a> -->
				<!-- </li> -->
			</ul>
		</nav>
	</header>
{/if}
