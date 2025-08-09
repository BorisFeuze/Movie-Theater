import { getStoredMovies } from "../../modules/storage.js";

const extraInfoMovie = (param, info) => {
  const { id, title, quantity } = param;

  const storedMovies = getStoredMovies();

  console.log(storedMovies);

  let updatedStoredMovies = [];

  const isInStoredMovie = storedMovies.some(
    (selectedMovie) => selectedMovie.infos
  );

  console.log(isInStoredMovie);

  if (!isInStoredMovie) {
    updatedStoredMovies = storedMovies.map((selectedMovie) => {
      if (selectedMovie.infos === param.infos) {
        let newInfo = [];
        newInfo.push(info);
        return { ...selectedMovie, infos: newInfo[0] };
      } else {
        return selectedMovie;
      }
    });
  } else {
    const updatedSelectedMovie = { id, title, quantity, infos: info };
    updatedStoredMovies = [...storedMovies, updatedSelectedMovie];
  }

  // console.log(e.target.parentElement);
  // console.log(param.id);
  // const storedMovies = getStoredMovies();
  // const updatedStoredMovies = [...storedMovies, selectedMovie];

  localStorage.setItem("storedMovies", JSON.stringify(updatedStoredMovies));
};

export { extraInfoMovie };
