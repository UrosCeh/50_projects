const buttons = document.querySelectorAll(".faq-toggle")

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const parentDiv = button.parentNode
		parentDiv.classList.toggle("active")
	})
})
