import { addMovie } from "./storage.js";

const renderMovieCard = (param, container) => {
  const imgCode = "https://image.tmdb.org/t/p/w500";
  const movieCard = document.createElement("div");
  movieCard.className =
    "bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center";

  const movieImageDiv = document.createElement("div");
  const movieInfoDiv = document.createElement("div");
  movieImageDiv.className = "flex mb-7 justify-center";
  movieInfoDiv.className = " flex flex-col  text-center ";
  movieCard.appendChild(movieImageDiv);
  movieCard.appendChild(movieInfoDiv);

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

  const addFavoriteBtn = document.createElement("button");
  addFavoriteBtn.textContent = "Add to Favourites";
  addFavoriteBtn.className =
    "px-4 py-2 bg-green-500 hover:bg-green-400 active:bg-green-300 text-white rounded mt-auto";
  addFavoriteBtn.addEventListener("click", () => {
    addMovie(param);
  });

  movieCard.appendChild(addFavoriteBtn);

  container.appendChild(movieCard);
};

export { renderMovieCard };
