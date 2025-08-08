const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWUzNGQ2MjI2YzdlMTE5MzQxZWJjZmNmMjk4YmI2YSIsIm5iZiI6MTc1NDQ5NDc1OC4xNDUsInN1YiI6IjY4OTM3NzI2MDE3YWQ0YTA3Njk5MTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i0yJatMFltM1g0Ei_BaJp4tBOuQEXfAvkp9ncbNcNqQ",
  },
};

const movieCont = document.querySelector("#movie-container");
// *   **Display Data**: Populate the DOM with the fetched movie data as styled cards. Show us the name, image and type. The grid is already set up in the HTML file.
const getStoredMovies = () => {
  return JSON.parse(localStorage.getItem("storedMovies")) || [];
};

const renderMovieCard = (param, container) => {
  const imgCode = "https://image.tmdb.org/t/p/w500";
  const movieCard = document.createElement("div");
  movieCard.className =
    "bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center";

  const movieImage = document.createElement("img");
  movieImage.src = imgCode + param.poster_path;
  movieImage.alt = param.name;
  movieImage.className = "mb-4";
  movieCard.appendChild(movieImage);

  const movieName = document.createElement("h2");
  movieName.textContent =
    param.title.charAt(0).toUpperCase() + param.title.slice(1);
  movieName.className = "text-xl font-bold mb-2";
  movieCard.appendChild(movieName);

  const movieInfo = document.createElement("p");
  movieInfo.textContent = `ID: ${param.id} | Release date: ${param.release_date}`;
  movieInfo.className = "text-gray-600";
  movieCard.appendChild(movieInfo);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Add";
  deleteBtn.className =
    "mt-5 px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded";
  deleteBtn.addEventListener("click", () => {
    const selectedMovie = { id: param.id, name: param.name };
    // console.log(e.target.parentElement);
    console.log(param.id);
    const storedMovies = getStoredMovies();
    const updatedStoredMovies = [...storedMovies, selectedMovie];

    localStorage.setItem("storedMovies", JSON.stringify(updatedStoredMovies));
    // localStorage.clear();
  });

  container.appendChild(movieCard);
};

const fetchMovies = async (params) => {
  const resp = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );

  if (!resp.ok) throw new Error(`Something went wrong! Error ${resp.status}`);

  const data = await resp.json();

  console.log(data);

  return data;
};

const fetchAndRendermovies = async () => {
  try {
    const { results } = await fetchMovies();

    const movies = { results };
    console.log(movies);

    // checking is  is an array before calling forEach
    // if (Array.isArray(todos)) {
    //   todos.forEach?.(todo => {
    //     renderTodo(todo, todoList);
    //   });
    // }
    console.log(movies.results);

    // using optional chaining to check if forEach method exists before calling it, and optional function call
    movies.results?.forEach?.((movieObj) => {
      renderMovieCard(movieObj, movieCont);
    });
  } catch (error) {
    console.error(error);
  }
};

fetchAndRendermovies();

// .then((res) => res.json())
// .then((res) => console.log(res))
// .catch((err) => console.error(err));
