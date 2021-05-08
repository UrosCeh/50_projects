const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")
const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")
const toggleEl = document.querySelector(".toggle")

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

toggleEl.addEventListener("click", (e) => {
	const html = document.querySelector("html")

	if (html.classList.contains("dark")) {
		html.classList.remove("dark")
		e.target.innerText = "Light Mode"
	} else {
		html.classList.add("dark")
		e.target.innerText = "Dark Mode"
	}
})

function setTime() {
	const time = new Date()
	// console.log(time)
	const month = time.getMonth()
	const day = time.getDate()
	const weekday = time.getDay()
	const hours24 = time.getHours()
	const hours = hours24 % 12
	const minutes = time.getMinutes()
	const seconds = time.getSeconds()

	const hourDeg = hours * (360 / 12) + Math.floor(minutes / 4) * 2

	hourEl.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`
	secondEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`

	timeEl.innerText = `${hours24}:${minutes.toString().padStart(2, "0")}`
	dateEl.innerText = `${days[weekday]}, ${months[month]} ${day}`
}

setInterval(() => {
	setTime()
}, 1000)
