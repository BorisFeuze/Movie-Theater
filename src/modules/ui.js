import { removeMovie } from "./removeFavourite.js";

const renderFavouriteMovieCard = (param, container) => {
  const imgCode = "https://image.tmdb.org/t/p/w500";
  const movieCard = document.createElement("div");
  movieCard.className =
    "bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-end text-center";

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

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className =
    "mt-5 px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded";
  deleteBtn.addEventListener("click", (event) => {
    // console.log(event.target.parentElement);
    removeMovie(param);
    event.target.parentElement.remove();
  });

  movieCard.appendChild(deleteBtn);

  container.appendChild(movieCard);
};

export { renderFavouriteMovieCard };
