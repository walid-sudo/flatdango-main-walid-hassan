let Films = [];
document.addEventListener("DOMContentLoaded", function(){
    getFilms()
})

async function getFilms(){
    // ... (your fetch code remains the same)
    fetch("http://localhost:3000/films")
    .then(response => response.json())
    .then(data => {
        films = [...data]
        displayFilms(data)
    })
}

function displayFilms(films){
    // Populate movie titles in the left container
    const movieListContainer = document.querySelector(".movie-list");
    films.forEach(film => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = film.title;
        listItem.addEventListener("click", () => displayMovieDetails(film));
        movieListContainer.appendChild(listItem);
    });

    // Display default movie details (id: 1)
    displayMovieDetails(films.find(film => film.id === "1"));
}

function displayMovieDetails(movie) {
    // Display movie details in the right container
    const movieDetailsContainer = document.querySelector(".movie-details");
    movieDetailsContainer.innerHTML = `
        <div class="card">
            <img src="${movie.poster}" class="card-img-top" alt="Movie Poster">
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">${movie.description}</p>
                <p class="card-text">Runtime: ${movie.runtime} minutes</p>
                <p class="card-text">Capacity: ${movie.capacity}</p>
                <p class="card-text">Showtime: ${movie.showtime}</p>
            </div>
        </div>
    `;
}