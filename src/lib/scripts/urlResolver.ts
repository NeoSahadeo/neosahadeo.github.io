import { dev } from '$app/environment';

enum API_URI {
	SELF_DEV = 'http://localhost:5173/',
	SELF_PROD = 'https://neosahadeo.github.io/'
}

function url_resolver(type: 'self'): null | string {
	if (dev) {
		switch (type) {
			case 'self':
				return API_URI.SELF_DEV;
		}
	} else {
		switch (type) {
			case 'self':
				return API_URI.SELF_PROD;
		}
	}
	return null;
}

export { url_resolver };
