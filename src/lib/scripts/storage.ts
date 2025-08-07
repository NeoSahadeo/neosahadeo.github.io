export function cache_control({
	name,
	method,
	data = ''
}: {
	name: string;
	method: 'set' | 'get' | 'clear' | 'delete';
	data?: string;
}): null | string {
	if (method === 'set') window.localStorage.setItem(`neosahadeo_main_${name}`, data);
	if (method === 'delete') window.localStorage.removeItem(`neosahadeo_main_${name}`);
	if (method === 'clear') window.localStorage.clear();
	if (method === 'get') {
		const data = window.localStorage.getItem(`neosahadeo_main_${name}`);
		return data ? data : null;
	}
	return null;
}
