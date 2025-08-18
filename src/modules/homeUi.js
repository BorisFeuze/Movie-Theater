import { addMovie } from "./storage.js";

// created a card with all the Needing information for the popular movieCard
const renderMovieCard = (param, container) => {
  // extention Code to image-adress
  const imgCode = "https://image.tmdb.org/t/p/w500";
  // created a moviecard container from home with styles
  const movieCard = document.createElement("div");
  movieCard.className =
    "bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center";
  // created a image and movie-info container from home with styles
  const movieImageDiv = document.createElement("div");
  const movieInfoDiv = document.createElement("div");
  movieImageDiv.className = "flex mb-7 justify-center";
  movieInfoDiv.className = " flex flex-col  text-center ";
  // attached the image and movie-info container from home to moviecard container from home
  movieCard.appendChild(movieImageDiv);
  movieCard.appendChild(movieInfoDiv);

  // created a image-element  with all styles
  const movieImage = document.createElement("img");
  movieImage.src = imgCode + param.poster_path; // Here we are putting together the extenstion code and image-info from fetching Data together
  movieImage.alt = param.name;
  movieImage.className = "mb-4";
  //attached the image-element to image container
  movieImageDiv.appendChild(movieImage);

  // created a title-element with all styles
  const movieName = document.createElement("h2");
  movieName.textContent =
    param.title.charAt(0).toUpperCase() + param.title.slice(1); // First Letter of the title should be Uppercase
  movieName.className = "text-xl font-bold mb-2";
  // attached the title-element to movie-info container
  movieInfoDiv.appendChild(movieName);

  // created a movie-info elements with all styles
  const movieInfo = document.createElement("p");
  movieInfo.textContent = `ID: ${param.id} | Release date: ${param.release_date}`; // we are displaying the Id and the release date of the movie as Info
  movieInfo.className = "text-gray-600";
  // attached the movie-info to movie-info container
  movieInfoDiv.appendChild(movieInfo);

  // created a add-favourite Button with all styles
  const addFavoriteBtn = document.createElement("button");
  addFavoriteBtn.textContent = "Add to Favourites";
  addFavoriteBtn.className =
    "px-4 py-2 bg-green-500 hover:bg-green-400 active:bg-green-300 text-white rounded mt-auto";
  // added eventlistener to add the data of selected movie in localstorage
  addFavoriteBtn.addEventListener("click", () => {
    addMovie(param);
  });

  // attached the Button to movieCard container
  movieCard.appendChild(addFavoriteBtn);

  // attached the movieCard home container to HTML-container
  container.appendChild(movieCard);
};

export { renderMovieCard };
