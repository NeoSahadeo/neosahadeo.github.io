export type Github = {
	sha: string,
	commit: {
		author: {
			name: string,
			email: string,
			date: string
		}
		message: string
	}
}
