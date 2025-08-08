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
