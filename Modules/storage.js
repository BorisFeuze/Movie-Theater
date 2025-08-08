const getStoredMovies = () => {
  return JSON.parse(localStorage.getItem("storedMovies")) || [];
};

const addMovie = (param) => {
  const selectedMovie = { id: param.id, name: param.name };
  // console.log(e.target.parentElement);
  console.log(param.id);
  const storedMovies = getStoredMovies();
  const updatedStoredMovies = [...storedMovies, selectedMovie];

  localStorage.setItem("storedMovies", JSON.stringify(updatedStoredMovies));
};

export { getStoredMovies, addMovie };
