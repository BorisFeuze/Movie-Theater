import { extraInfoMovie } from "./extra-info.js";
import { removeMovie } from "./removeFavourite.js";

// created a card with all the Needing information for the favourite movieCard
const renderFavouriteMovieCard = (param, container) => {
  // extention Code to image-adress
  const imgCode = "https://image.tmdb.org/t/p/w500";
  // created a moviecard container from journal with styles
  const movieCard = document.createElement("div");
  movieCard.className =
    "bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center";

  // created a image and movie-info container from journal with styles
  const movieImageDiv = document.createElement("div");
  const movieInfoDiv = document.createElement("div");
  movieImageDiv.className = "flex mb-7 justify-center";
  movieInfoDiv.className = " flex flex-col  text-center ";
  // attached the image and movie-info container from journal to moviecard container from from journal
  movieCard.appendChild(movieImageDiv);
  movieCard.appendChild(movieInfoDiv);

  // created a image-element with all styles
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
  movieName.className = "text-xl font-bold";
  // attached the title-element to movie-info container
  movieInfoDiv.appendChild(movieName);

  // created a movie-info elements with all styles
  const movieInfo = document.createElement("p");
  movieInfo.textContent = `ID: ${param.id} | Release date: ${param.release_date}`; // we are displaying the Id and the release date of the movie as Info
  movieInfo.className = "text-gray-600";
  // attached the movie-info to movie-info container
  movieInfoDiv.appendChild(movieInfo);

  // created a comment container with all styles
  const userComment = document.createElement("div");
  userComment.className =
    "bg-white p-1 flex flex-col items-center justify-end h-full";
  // created a label with all styles
  const label = document.createElement("p");
  label.className = "text-sm mt-2 font-bold ";
  label.textContent = "Comments";
  // attached the label to comment container
  userComment.appendChild(label);

  // created a input element to write a comment with all styles
  const inputElement = document.createElement("input");
  inputElement.className = "border p-2 w-full rounded-sm mb-2";
  inputElement.setAttribute("id", `userInput-${param.id}`);
  inputElement.setAttribute("type", "text");
  inputElement.setAttribute("placeholder", "Enter a comment");
  // attached the input element to comment container
  userComment.appendChild(inputElement);

  // created a save button with all styles
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.className =
    "mb-2 px-2 pb-1 bg-black hover:bg-green-400 active:bg-green-300 text-white rounded";

  // attached the save button to comment container
  userComment.appendChild(saveBtn);

  // attached the eventlistener to update infos in the movie data
  saveBtn.addEventListener("click", (event) => {
    const inputValue = document
      .querySelector(`#userInput-${param.id}`) // identify the right data, where we want to add the new info
      .value.trim();
    // *  Make sure the input is not empty before saving!
    if (!inputValue) {
      alert("Cannot save an empty comment");
      return;
    }

    //save the new Info to the movie Data  in localstorage
    extraInfoMovie(inputValue);

    // reset the input element
    document.querySelector(`#userInput-${param.id}`).value = "";
  });

  // attached the comment container to moviecard container from journal
  movieCard.appendChild(userComment);

  // created a delete button with all styles
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className =
    "px-4 py-2 bg-red-500 hover:bg-red-400 active:bg-red-300 text-white rounded mt-auto";

  // attached the eventlistener to remove the moviecard from journal container and remove the Data from localstorage
  deleteBtn.addEventListener("click", (event) => {
    // remove the moviecard Data from localstorage
    removeMovie(param);
    // remove the moviecard from journal container
    event.target.parentElement.remove();
  });

  // attached the delete button to moviecard container from journal
  movieCard.appendChild(deleteBtn);

  // attached the movieCard journal container to HTML-container
  container.appendChild(movieCard);
};

export { renderFavouriteMovieCard };
