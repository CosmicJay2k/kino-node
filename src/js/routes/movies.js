import express from "express";
import { fetchMovies, fetchMovie } from "../modules/fetchData.js";

const moviesRouter = express.Router();

moviesRouter.get("/", async (req, res) => {
  const movies = await fetchMovies();
  if (movies) {
    res.render("movies", { movies });
  } else {
    res.status(404).render("movies404");
  }
});

moviesRouter.get("/:movieId", async (req, res) => {
  const movie = await fetchMovie(req.params.movieId);
  if (movie) {
    res.render("movie", { movie });
  } else {
    res.status(404).render("movie404");
  }
});

export default moviesRouter;
