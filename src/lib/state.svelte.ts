let max_width = $state();
export const get_max_width = () => max_width;
export const set_max_width = (value: any) => (max_width = value);

let loading_states = $state<any[]>([]);
export const update_loading_state = (alias: string, state: boolean) => {
	let exists = null;
	loading_states.forEach((e, index) => {
		if (e[0] === alias) {
			exists = index;
		}
	});
	if (exists !== null) {
		loading_states[exists][1] = state;
	} else {
		loading_states.push([alias, state]);
	}
};
export const get_loading_states = () => loading_states;

let is_protected = $state(true);
export const get_is_protected = () => is_protected;
export const set_is_protected = (value: boolean) => (is_protected = value);
