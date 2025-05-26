class Mafs {
	FLIP_deg = 180;
	FLIP_rad = this.deg_to_rad(this.FLIP_deg);
	/*
	 * Description:
	 * Splits into horizontal and vertical compontents
	 */
	components(scalar: number, rad: number): [number, number] {
		return [scalar * Math.cos(rad), scalar * Math.sin(rad)];
	}

	deg_to_rad(degrees: number) {
		return degrees / 57.29577951;
	}
}

class Weather extends Mafs {
	fps = 60;
	prev_timestamp = 0;
	context: CanvasRenderingContext2D;
	stage;

	commets: {
		color: string;
		drag: number;
		size: number;
		speed: number;
		lifetime: number;
		direction: number; // radians
		trail_length: number;
		trail_components: [number, number];
		coords: [number, number];
	}[] = [];

	constructor(stage: HTMLCanvasElement) {
		super();

		this.stage = stage;
		this.stage.height = window.innerHeight;
		this.stage.width = window.innerWidth;
		this.context = stage.getContext('2d') as CanvasRenderingContext2D;
		this.game_loop = this.game_loop.bind(this); // Bind here

		window.addEventListener('resize', (e) => {
			this.stage.height = window.innerHeight;
			this.stage.width = window.innerWidth;
		});

		this.generate_commets();

		window.requestAnimationFrame(this.game_loop);
	}

	generate_commets() {
		// <------ you are here you bitch!

		const rand_x = window.innerWidth - Math.random() * window.innerWidth;
		const rand_y = 0;

		this.commets.push({
			color: 'white',
			drag: 10,
			size: 3,
			speed: 80,
			lifetime: 5,
			direction: this.deg_to_rad(45), // radians
			trail_length: 200,
			trail_components: this.components(200, this.deg_to_rad(this.FLIP_deg - 45)),
			coords: [rand_x, rand_y]
		});
	}

	game_loop(timestamp: number) {
		const delta = (timestamp - this.prev_timestamp) / 1000;
		this.prev_timestamp = timestamp;
		const fps = Math.round(1 / delta);

		// this.update(delta);
		// this.draw(fps);

		window.requestAnimationFrame(this.game_loop);
	}
	update(delta: number) {
		this.commets.forEach((e) => {
			const [x, y] = this.components(e.speed, e.direction);
			e.coords[0] -= delta * x;
			e.coords[1] += delta * y;
		});

		this.commets = this.commets.filter((e) => {
			const y = e.coords[0] + e.size + e.trail_length;
			const x = e.coords[1] + e.size + e.trail_length;
			return y < window.innerWidth && x + e.size < window.innerHeight && y > 0 && x > 0;
		});
	}
	draw(fps: number) {
		this.context.clearRect(0, 0, this.stage.width, this.stage.height);
		this.context.font = '25px Regular Roboto Mono';
		this.context.fillStyle = 'black';
		this.context.fillText('FPS: ' + fps, window.innerWidth - 140, 30);

		// this.commets.forEach((e) => {
		// 	this.context.shadowColor = 'rgba(255, 255, 200, 0.8)'; // Glow color and opacity
		// 	this.context.shadowBlur = 20; // Amount of blur
		//
		// 	this.context.beginPath();
		// 	this.context.moveTo(e.coords[0] - e.size, e.coords[1]);
		// 	this.context.lineTo(e.coords[0] - e.trail_components[0], e.coords[1] - e.trail_components[1]);
		// 	this.context.lineTo(e.coords[0] + e.size, e.coords[1]);
		//
		// 	this.context.arc(e.coords[0], e.coords[1], e.size, 0, 6.28);
		// 	this.context.fillStyle = e.color;
		// 	this.context.fill();
		// });
	}
}

export { Weather };
