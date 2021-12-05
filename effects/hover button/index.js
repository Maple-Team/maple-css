let svg = document.querySelector("svg");
let wibble = document.querySelector("#wibble");
let width = 100;
let pointz = 30;
let spacing = width / pointz;
let pointzArray = [];
let mySplitText = new SplitText(".text", { type: "chars" });
let chars = mySplitText.chars;
let amplitude = 10;
let duration = 0.4;

function staggerText(direction) {
	gsap.to(chars, {
		duration: duration / 3,
		y: amplitude * -1,
		ease: "Sine.easeInOut",
		stagger: {
			amount: duration / 3,
			yoyo: true,
			repeat: 1,
			from: direction
		}
	});
}

for (var i = 0; i < pointz; i++) {
	let position = i / (pointz - 1);

	let point = wibble.points.appendItem(svg.createSVGPoint());

	point.x = i * spacing;
	point.y = 25;

	pointzArray.push(point);
}

let button = document.querySelector("button");
gsap.set(button, { opacity: 1 });
let isAnimating = false;
let reservedArray = [...pointzArray].reverse();

button.addEventListener("mouseenter", (e) => {
	if (isAnimating === true) return;

	let buttonCoords = button.getBoundingClientRect();
	let middle = buttonCoords.left + buttonCoords.width / 2;
	let leftSide = e.clientX < middle;

	if (leftSide) {
		staggerText("start");
		wibbleButton(reservedArray);
	} else {
		staggerText("end");
		wibbleButton(pointzArray);
	}

	isAnimating = true;
});

function wibbleButton(array) {
	array.forEach((point, index) => {
		let mapper = gsap.utils.mapRange(0, pointz, 0, 0.4);

		if (index === 0) {
			gsap
				.to(point, {
					keyframes: [
						{ y: `+=${amplitude}`, ease: "Sine.easeInOut" },
						{ y: `-=${amplitude * 2}`, ease: "Sine.easeInOut" },
						{ y: `+=${amplitude}`, ease: "Sine.easeInOut" }
					],
					yoyo: true,
					duration: duration,
					onComplete: () => {
						isAnimating = false;
					}
				})
				.progress(mapper(index));
		} else {
			gsap
				.to(point, {
					keyframes: [
						{ y: `+=${amplitude}`, ease: "Sine.easeInOut" },
						{ y: `-=${amplitude * 2}`, ease: "Sine.easeInOut" },
						{ y: `+=${amplitude}`, ease: "Sine.easeInOut" }
					],
					yoyo: true,
					duration: duration
				})
				.progress(mapper(index));
		}
	});
}
