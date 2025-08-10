import { extraInfoMovie } from "./extra-info.js";
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

  const userComment = document.createElement("div");
  userComment.className = "bg-white p-1 ";
  const label = document.createElement("p");
  label.className = "text-sm mt-2 font-bold ";
  label.textContent = "Comments";
  userComment.appendChild(label);

  const inputElement = document.createElement("input");
  inputElement.className = "border p-2 w-full rounded-sm";
  inputElement.setAttribute("id", `userInput-${param.id}`);
  inputElement.setAttribute("type", "text");
  inputElement.setAttribute("placeholder", "Enter a comment");
  userComment.appendChild(inputElement);
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.className =
    " px-2 pb-1 mt-2 bg-black hover:bg-green-400 active:bg-green-300 text-white rounded";
  saveBtn.addEventListener("click", (event) => {
    const inputValue = document
      .querySelector(`#userInput-${param.id}`)
      .value.trim();
    // *   Make sure the input is not empty before saving!
    if (!inputValue) {
      alert("Cannot save an empty comment");
      return;
    }
    extraInfoMovie(param, inputValue);
    // localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    document.querySelector(`#userInput-${param.id}`).value = "";
  });

  userComment.appendChild(saveBtn);
  movieCard.appendChild(userComment);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className =
    "mt-5 px-4 py-2 bg-red-500 hover:bg-red-400 active:bg-red-300 text-white rounded";
  deleteBtn.addEventListener("click", (event) => {
    // console.log(event.target.parentElement);
    removeMovie(param);
    event.target.parentElement.remove();
  });

  movieCard.appendChild(deleteBtn);

  container.appendChild(movieCard);
};

export { renderFavouriteMovieCard };
