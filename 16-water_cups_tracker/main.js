const smallCups = document.querySelectorAll(".cup-small")
const liters = document.getElementById("liters")
const percentage = document.getElementById("percentage")
const remained = document.getElementById("remained")

updateBigCup()

smallCups.forEach((cup, idx) => {
	cup.addEventListener("click", () => highlighCups(idx))
})

function highlighCups(index) {
	if (smallCups[index].classList.contains("full") && !smallCups[index].nextElementSibling.classList.contains("full")) {
		index--
	}

	smallCups.forEach((cup, idx) => {
		if (idx <= index) {
			cup.classList.add("full")
		} else {
			cup.classList.remove("full")
		}
	})

	updateBigCup()
}

function updateBigCup() {
	const fullCups = document.querySelectorAll(".cup-small.full").length
	const totalCups = smallCups.length

	const percentageDrank = fullCups / totalCups

	if (fullCups === 0) {
		percentage.style.visibility = "hidden"
		percentage.style.height = 0
	} else {
		percentage.style.visibility = "visible"
		percentage.style.height = `${percentageDrank * 100}%`
		percentage.innerText = `${percentageDrank * 100}%`
	}
	let litersLeft = 2 - 2 * percentageDrank
	if (litersLeft === 0) {
		remained.style.visibility = "hidden"
		remained.style.height = 0
	} else {
		remained.style.visibility = "visible"
		liters.innerText = `${litersLeft} L`
	}
}
