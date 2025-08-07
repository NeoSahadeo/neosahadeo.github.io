// import { get_delay_time, set_loading } from '$lib/state.svelte';
// let start_time = 0;
//
// export function update_timer(timestamp: number) {
// 	if (!start_time) start_time = timestamp;
// 	const elapsed = $derived(timestamp - start_time);
// 	const time_left = get_delay_time() - elapsed;
// 	console.log(time_left);
// 	if (time_left > 0) {
// 		requestAnimationFrame(update_timer);
// 	} else {
// 		set_loading(false);
// 	}
// }
