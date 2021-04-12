const joke = document.querySelector("#joke")
const jokeBtn = document.querySelector("#jokeBtn")

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    }

    // fetch("https://icanhazdadjoke.com/", config)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         joke.innerText = data.joke
    //     })
    
    const res = await fetch("https://icanhazdadjoke.com/", config)
    const data = await res.json()
    joke.innerText = data.joke
}
