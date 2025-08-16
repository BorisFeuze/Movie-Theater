import { getStoredMovies } from "./storage.js";

const removeMovie = (param) => {
  const { id, title } = param;

  const storedMovies = getStoredMovies();

  const updatedStoredMovies = storedMovies.filter((storedMovie) => {
    return storedMovie.id !== id;
  });

  localStorage.setItem("storedMovies", JSON.stringify(updatedStoredMovies));
};

export { removeMovie };
