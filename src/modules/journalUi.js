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
  movieImage.className = "";
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

  
  // Container for comment-section
  const userComment = document.createElement("div");
  userComment.className = "bg-white p-1 flex flex-col items-center h-full relative"; // <-- relative
  const label = document.createElement("p");
  label.className = "text-sm mt-2 font-bold";
  userComment.appendChild(label);

  // Creat Svg-Btn
  const svgBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgBtn.setAttribute("viewBox", "0 0 24 24");
  svgBtn.setAttribute("fill", "currentColor");
  svgBtn.classList.add("w-9", "h-9", "cursor-pointer", "text-black"); // Standardfarbe schwarz
  svgBtn.innerHTML = `<path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clip-rule="evenodd" />`;

  // Checking if a Svg exists -> dyeing green if necessary
  const existingComment = localStorage.getItem(`comment-${param.id}`);
  if (existingComment) {
    svgBtn.classList.remove("text-black");
    svgBtn.classList.add("text-green-500");
  }
  userComment.appendChild(svgBtn);

  // Popup-function
  svgBtn.addEventListener("click", () => {
    // Checking if the popup already exists for this movie
    let existingPopup = userComment.querySelector(".comment-popup");

    if (existingPopup) {
      // If other popup is up -> close it
      existingPopup.remove();
      return;
    }

  // Close all other popups
  document.querySelectorAll(".comment-popup").forEach(p => p.remove());

  // Create new popup 
  const popup = document.createElement("div");
  popup.className = "comment-popup flex flex-col bg-gray-100 p-2 rounded shadow w-64 absolute z-50";

  // Positioning of the popup window
  popup.style.top = "-205%"; 
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";

  // Input-field
  const input = document.createElement("input");
  input.className = "border bg-white-500 p-2 w-full rounded-sm mb-2";
  input.type = "text";
  input.placeholder = "Enter a comment";

  // Comments that are saved
  const storedComment = localStorage.getItem(`comment-${param.id}`);
  if (storedComment) input.value = storedComment;

  // X-Button for deleating input
  const clearBtn = document.createElement("button");
  clearBtn.innerHTML = "&times;";
  clearBtn.className = "absolute right-4 top-4 text-gray-500 hover:text-red-500";
  clearBtn.addEventListener("click", () => {
    input.value = "";
    localStorage.removeItem(`comment-${param.id}`);
    svgBtn.classList.remove("text-green-500");
    svgBtn.classList.add("text-black");
  });

  // Save-Button
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.className = "mb-2 px-2 pb-1 bg-black hover:bg-green-400 active:bg-green-300 text-white rounded";
  saveBtn.addEventListener("click", () => {
    const val = input.value.trim();
    if (!val) {
      alert("Cannot save an empty comment");
      return;
    }
    //comment gets saved in localStorage -> color gets changed
    localStorage.setItem(`comment-${param.id}`, val);
    svgBtn.classList.remove("text-black");
    svgBtn.classList.add("text-green-500");
    popup.remove();
  });
  
  //attached all elements to th comment-section container
  popup.appendChild(clearBtn);
  popup.appendChild(input);
  popup.appendChild(saveBtn);
  userComment.appendChild(popup);
  });

movieCard.appendChild(userComment);


  // created a delete button with all styles
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className =
    "px-4 py-2 bg-red-500 hover:bg-red-400 active:bg-red-300 text-white rounded mt-2";

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
