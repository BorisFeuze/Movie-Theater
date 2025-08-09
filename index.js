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

    movies.results?.forEach?.((movieObj) => {
      renderMovieCard(movieObj, movieCont);
    });
  } catch (error) {
    console.error(error);
  }
};

fetchAndRendermovies();

export { fetchAndRendermovies };
