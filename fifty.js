function marquee() {
	const title = 'FIFTY Music Festival — November 10–12 2021, Desert Valley';
	const marqueeText = new Array(10).fill(title).join(' --- ');
	const marquee = document.querySelector('.marquee span');

	marquee.innerHTML = marqueeText;
}
marquee();
