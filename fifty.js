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
