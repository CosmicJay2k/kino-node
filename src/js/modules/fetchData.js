import fetch from "node-fetch";

export async function fetchMovies() {
  const response = await fetch(
    "https://lernia-kino-cms.herokuapp.com/api/movies"
  );
  const data = await response.json();
  return data.data;
}

export async function fetchMovie(id) {
  const response = await fetch(
    `https://lernia-kino-cms.herokuapp.com/api/movies/${id}`
  );
  const data = await response.json();
  return data.data;
}
