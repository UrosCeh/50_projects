const button = document.getElementById("toggle")

button.addEventListener("click", () => {
	button.parentNode.classList.toggle("active")
})
