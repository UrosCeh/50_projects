const textarea = document.getElementById("textarea")
const tags = document.getElementById("tags")

textarea.focus()

textarea.addEventListener("keyup", (e) => {
	addChoices(e.target.value)
	console.log(e.key)
	if (e.key === "Enter") {
		setTimeout(() => {
			e.target.value = ""
		}, 100)

		randomSelect()
	}
})

function addChoices(input) {
	const choices = input
		.split(",")
		.filter((tag) => tag.trim() !== "")
		.map((tag) => tag.trim())
	console.log(choices)

	addTags(choices)
}

function addTags(choices) {
	tags.innerHTML = ""

	choices.forEach((choice) => {
		const tag = document.createElement("span")
		tag.classList.add("tag")
		tag.innerText = choice
		tags.appendChild(tag)
	})
}

function randomSelect() {
	const times = 30

	const interval = setInterval(() => {
		const randomTag = pickRandomTag()
		highlightTag(randomTag)
		setTimeout(() => {
			unhighlightTag(randomTag)
		}, 100)
	}, 100)

	setTimeout(() => {
		clearInterval(interval)

		setTimeout(() => {
			const randomTag = pickRandomTag()
			highlightTag(randomTag)
		}, 100)
	}, times * 100)
}

function pickRandomTag() {
	const tags = document.querySelectorAll(".tag")
	return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
	tag.classList.add("highlight")
}

function unhighlightTag(tag) {
	tag.classList.remove("highlight")
}
