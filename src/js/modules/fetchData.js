import fetch from "node-fetch";

export async function fetchMovies() {
  const url = "https://lernia-kino-cms.herokuapp.com/api/movies";
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
}