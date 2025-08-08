import { fetchMovies } from "./Modules/networks.js";
import { getStoredMovies } from "./Modules/storage.js";
import { renderMovieCard } from "./Modules/ui.js";

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
