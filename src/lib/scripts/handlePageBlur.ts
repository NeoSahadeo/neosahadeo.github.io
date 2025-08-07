const funnyTitles = [
	'Snack Boss 🍕',
	'Nap King 😴',
	'Ping Pong Pro 🏓',
	'Couch Captain 🛋️',
	'Pun Master 🤹‍♂️',
	'Joke Wizard 🧙‍♂️',
	'Sarcasm Lord 😏',
	'Noodle Guy 🍜',
	'Chill Chief 🛡️',
	'Pro Procrastinator ⏳'
];

function generate_title() {
	const randomIndex = Math.floor(Math.random() * funnyTitles.length);
	return funnyTitles[randomIndex];
}

let interval_d: number;

export default function handle_page_blur(event: Event, page_title: string, afk_title?: string) {
	clearInterval(interval_d);
	if (event.type === 'blur') {
		interval_d = setInterval(() => {
			document.title = afk_title || generate_title();
		}, 1000);
	} else {
		document.title = page_title;
	}
}
