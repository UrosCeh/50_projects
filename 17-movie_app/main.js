const API_KEY = "379499551351838f483ae37443d12e74"
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=379499551351838f483ae37443d12e74&page=1"
const IMG_PATH = "https://image.tmdb.org/t/p/w1280/"
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=379499551351838f483ae37443d12e74&query=`

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

getMovies(API_URL)

async function getMovies(url) {
	const res = await fetch(url)
	const data = await res.json()

	showMovies(data.results)
}

form.addEventListener("submit", (e) => {
	e.preventDefault()

	const searchTerm = search.value

	if (searchTerm && searchTerm !== "") {
		getMovies(SEARCH_URL + searchTerm)

		search.value = ""
	} else {
		window.location.reload()
	}
})

function showMovies(movies) {
	main.innerHTML = ""

	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie
		const movieEl = document.createElement("div")
		movieEl.classList.add("movie")

		const movieImg = document.createElement("img")
		movieImg.src = IMG_PATH + poster_path

		const movieInfo = document.createElement("div")
		movieInfo.classList.add("movie-info")

		const movieTitle = document.createElement("h3")
		movieTitle.innerText = title

		const movieVote = document.createElement("span")
		movieVote.innerText = vote_average
		if (vote_average > 8) {
			movieVote.classList.add("green")
		} else if (vote_average > 5) {
			movieVote.classList.add("orange")
		} else {
			movieVote.classList.add("red")
		}

		movieInfo.appendChild(movieTitle)
		movieInfo.appendChild(movieVote)

		const movieOverview = document.createElement("div")
		movieOverview.classList.add("overview")

		// const overviewH3 = document.createElement("h3")
		// overviewH3.innerText = "Overview"
		// movieOverview.appendChild(overviewH3)
		movieOverview.innerHTML = `
            <h3>Overview</h3>
            ${overview}
        `

		movieEl.appendChild(movieImg)
		movieEl.appendChild(movieInfo)
		movieEl.appendChild(movieOverview)

		main.appendChild(movieEl)
		console.log(movieEl)
	})
}
