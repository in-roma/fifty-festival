// Animation top moving text

function marquee() {
	const title = 'FIFTY Music Festival — November 10–12 2021, Desert Valley';
	const marqueeText = new Array(50).fill(title).join(' ——— ');
	const marquee = document.querySelector('.marquee span');

	marquee.innerHTML = marqueeText;
}
marquee();

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Animation circles

const circles = document.querySelectorAll('.circle');
circles.forEach((circle, index) =>
	circle.animate(
		[
			{ transform: 'scale(1)' },

			{ transform: 'scale(1.4)' },

			{ transform: 'scale(1)' },
		],
		{
			delay: 300 * index,
			duration: 3000,
			iterations: Infinity,
		}
	)
);

// Animation squiggles

const squiggles = document.querySelectorAll('.squiggle');
const randomNumber = random(0, 360);
squiggles.forEach((squiggle, index) =>
	squiggle.animate(
		[
			{ transform: 'rotate(0deg)' },

			{ transform: 'rotate(' + randomNumber + 'deg)' },

			{ transform: 'rotate(0deg)' },
		],
		{
			delay: 300 * index,
			duration: 9000,
			iterations: Infinity,
		}
	)
);

// Managing animation states

inView('.section')
	.on('enter', (section) => {
		section.classList.add('in-viewport');
	})
	.on('exit', (section) => {
		section.classList.remove('in-viewport');
	});

inView.treshold(0.8);

const sections = document.querySelectorAll('.section');
sections.forEach((section, index) => {
	const artists = section.querySelectorAll('.lineup li');
	const shapes = section.querySelectorAll('.shape');

	artists.forEach((artist, index) => {
		const delay = index * 100;
		artist.style.transitionDelay = delay + 'ms';
	});
	shapes.forEach((shape, index) => {
		const delay = (artist.length + index) * 100;
		shape.style.transitionDelay = delay + 'ms';
	});
});

// Managing scrolling

const scrollLinks = document.querySelectorAll('.js-scroll');
scrollLinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		const href = link.getAttribute('href');
		document.querySelector(href).scrollIntoView({
			behavior: 'smooth',
		});
	});
});
