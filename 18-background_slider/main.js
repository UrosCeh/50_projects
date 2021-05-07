const body = document.body
const left = document.getElementById("left")
const right = document.getElementById("right")
const slides = document.querySelectorAll(".slide")

left.addEventListener("click", () => moveToLeft())
right.addEventListener("click", () => moveToRight())

function moveToLeft() {
	const activeIdx = activeSlideIndex()
	let idx

	if (activeIdx == 0) {
		idx = slides.length - 1
	} else {
		idx = activeIdx - 1
	}

	slides.item(idx).classList.add("active")
	setBodyBackgroundImage(idx)
}

function moveToRight() {
	const activeIdx = activeSlideIndex()
	let idx

	if (activeIdx == slides.length - 1) {
		idx = 0
	} else {
		idx = activeIdx + 1
	}

	slides.item(idx).classList.add("active")
	setBodyBackgroundImage(idx)
}

function activeSlideIndex() {
	for (let idx of slides.keys()) {
		if (slides.item(idx).classList.contains("active")) {
			slides.item(idx).classList.remove("active")
			return idx
		}
	}
}

function setBodyBackgroundImage(idx) {
	body.style.backgroundImage = slides[idx].style.backgroundImage
}
