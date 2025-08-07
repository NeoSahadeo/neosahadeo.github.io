import { cache_control } from './storage';

// Return either true for loaded or false for not loaded
export const update_style = (): boolean => {
	document.getElementById('global-override')?.remove();
	const style_override = cache_control({
		name: 'global_style_override',
		method: 'get'
	});
	if (style_override) {
		const e = document.createElement('style');
		e.id = 'global-override';
		e.innerHTML = style_override;
		document.body.appendChild(e);
		return true;
	}
	return false;
};
