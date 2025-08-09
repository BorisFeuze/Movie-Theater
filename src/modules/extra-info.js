import { getStoredMovies } from "../../modules/storage.js";

const extraInfoMovie = (param, info, event) => {
  const storedMovies = getStoredMovies();

  let updatedStoredMovies = [];

  const isInStoredMovie = storedMovies.some((selectedMovie) => {
    return selectedMovie.infos === param.infos;
  });
  console.log(isInStoredMovie);

  if (isInStoredMovie) {
    updatedStoredMovies = storedMovies.map((selectedMovie) => {
      if (selectedMovie.infos === param.infos) {
        return { ...selectedMovie, infos: (selectedMovie.infos = info) };
      } else {
        return selectedMovie;
      }
    });
  } else {
    const updatedSelectedMovie = { ...param, infos: info };
    updatedStoredMovies = [...storedMovies, updatedSelectedMovie];
  }

  // console.log(e.target.parentElement);
  // console.log(param.id);
  // const storedMovies = getStoredMovies();
  // const updatedStoredMovies = [...storedMovies, selectedMovie];

  localStorage.setItem("storedMovies", JSON.stringify(updatedStoredMovies));
  event.target.reset();
};

export { extraInfoMovie };
