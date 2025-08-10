// localStorage.clear();

const getStoredMovies = () => {
  return JSON.parse(localStorage.getItem("storedMovies")) || [];
};

const addMovie = (param) => {
  const { id } = param;

  const storedMovies = getStoredMovies();

  let updatedStoredMovies = [];

  const isInStoredMovie = storedMovies.some((selectedMovie) => {
    return selectedMovie.id === id;
  });
  console.log(isInStoredMovie);

  if (isInStoredMovie) {
    updatedStoredMovies = storedMovies.map((selectedMovie) => {
      if (selectedMovie.id === id) {
        return { ...selectedMovie, quantity: selectedMovie.quantity + 1 };
      } else {
        return selectedMovie;
      }
    });
  } else {
    const updatedSelectedMovie = { ...param, quantity: 1 };
    updatedStoredMovies = [...storedMovies, updatedSelectedMovie];
  }

  // console.log(e.target.parentElement);
  // console.log(param.id);
  // const storedMovies = getStoredMovies();
  // const updatedStoredMovies = [...storedMovies, selectedMovie];

  localStorage.setItem("storedMovies", JSON.stringify(updatedStoredMovies));
};

export { getStoredMovies, addMovie };
