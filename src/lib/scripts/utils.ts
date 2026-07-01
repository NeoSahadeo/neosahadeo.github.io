const MOOONTHS = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
];

const MOOONTHS_FULL = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

export function generate_date(value: string) {
	const date_obj = new Date(value);
	return `${date_obj.getDate()} ${MOOONTHS[date_obj.getMonth()]} ${date_obj.getFullYear()}`;
}

/*
 * Ripple Generator for button clicks, inspired my material ui
 * */
export function create_ripple(event: MouseEvent) {
	const button = event.currentTarget as HTMLButtonElement;
	const circle = document.createElement('span');
	const diameter = Math.max(button.clientWidth, button.clientHeight);
	const radius = diameter * 0.5;

	circle.style.width = `${diameter}px`;
	circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - button.getBoundingClientRect().x - radius}px`;
	circle.style.top = `${event.clientY - button.getBoundingClientRect().y - radius}px`;
	circle.classList.add('ripple');

	const ripples = button.querySelectorAll('.ripple');
	ripples.forEach((e) => e.remove());
	button.appendChild(circle);
}
