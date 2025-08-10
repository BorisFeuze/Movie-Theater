const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWUzNGQ2MjI2YzdlMTE5MzQxZWJjZmNmMjk4YmI2YSIsIm5iZiI6MTc1NDQ5NDc1OC4xNDUsInN1YiI6IjY4OTM3NzI2MDE3YWQ0YTA3Njk5MTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i0yJatMFltM1g0Ei_BaJp4tBOuQEXfAvkp9ncbNcNqQ",
  },
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

export { fetchMovies };

//fetch for search function

export const searchMovies = async (search) => {

    const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;

    try {

      const response = await fetch(url, options);
      const data = await response.json();


    return data;

    } catch (error) {
      console.error("Error", error)
      return [];
    }
};
