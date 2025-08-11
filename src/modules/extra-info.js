import { getStoredMovies } from "../../modules/storage.js";

const extraInfoMovie = (info) => {
  const storedMovies = getStoredMovies();

  const updatedStoredMovies = storedMovies.map((storedMovie) => {
    return { ...storedMovie, infos: info };
  });

  localStorage.setItem("storedMovies", JSON.stringify(updatedStoredMovies));
};

export { extraInfoMovie };
