import { getStoredMovies } from "../modules/storage.js";
import { renderFavouriteMovieCard } from "./modules/ui.js";

const favouriteMovieCont = document.querySelector("#favourite-movie-container");

const storedMovies = getStoredMovies();

storedMovies?.forEach?.((movieObj) => {
  renderFavouriteMovieCard(movieObj, favouriteMovieCont);
});
