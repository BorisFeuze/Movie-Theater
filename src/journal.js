import { fetchMovies } from "../modules/networks.js";
import { getStoredMovies } from "../modules/storage.js";
import { renderFavouriteMovieCard } from "./modules/ui.js";

const favouriteMovieCont = document.querySelector("#favourite-movie-container");

const movies = async () => {
  try {
    const dataMovies = await fetchMovies();
    const result = dataMovies.results;
    const storedMovies = getStoredMovies();
    let favouriteMovies = [];
    storedMovies.forEach((storedMovie) => {
      const dataStoredMovies = result.find(
        (data) => data.id === storedMovie.id
      );

      favouriteMovies.push(dataStoredMovies);
    });

    favouriteMovies?.forEach?.((movieObj) => {
      renderFavouriteMovieCard(movieObj, favouriteMovieCont);
    });
  } catch {
    (err) => err.message;
  }
};

movies();
