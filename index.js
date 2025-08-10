import { fetchMovies } from "./modules/networks.js";
import { getStoredMovies } from "./modules/storage.js";
import { renderMovieCard } from "./modules/ui.js";

const movieCont = document.querySelector("#movie-container");
// *   **Display Data**: Populate the DOM with the fetched movie data as styled cards. Show us the name, image and type. The grid is already set up in the HTML file.
getStoredMovies();

const fetchAndRendermovies = async () => {
  try {
    const { results } = await fetchMovies();

    const movies = { results };
    console.log(movies);

    console.log(movies.results);

    movies.results?.forEach?.((movieObj) => {
      renderMovieCard(movieObj, movieCont);
    });
  } catch (error) {
    console.error(error);
  }
};

fetchAndRendermovies();

export { fetchAndRendermovies };

//Search function - Eventlistner for button and enter


import { searchMovies } from "./Modules/networks.js";

// Debounce function
function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

const searchInput = document.getElementById('searchInput');

const handleSearch = async (event) => {
  const query = searchInput.value.trim();

  if (query === "") {
    removeMovies();
    fetchAndRendermovies();
    return;
  }

  const movies = await searchMovies(query);

  if (!movies?.results?.length) return;

  removeMovies();
  movies.results.forEach((movie) => {
    renderMovieCard(movie, movieCont);
  });
};

// Wrap handleSearch with debounce of 150ms
searchInput.addEventListener('input', debounce(handleSearch, 300));

function removeMovies() {
  const container = movieCont;
  container.innerHTML = ""; // removes ALL child elements
}
