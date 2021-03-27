const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle") 

let current_active = 1

next.addEventListener("click", () => {
    if (current_active < circles.length) {
        current_active++
    }
    update()
})

prev.addEventListener("click", () => {
    if (current_active > 1) {
        current_active--
    }
    update()
})

function update() {
    circles.forEach((circle, index) => {
        if (index < current_active) {
            circle.classList.add("active")
        }
        else {
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active") //number of active of 4 - to get percentage of progress bar

    progress.style.width = (actives.length-1)/(circles.length-1) * 100 + "%"

    if(current_active == 1) {
        prev.disabled = true
    }
    else if (current_active == circles.length) {
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disabled = false
    }
}
