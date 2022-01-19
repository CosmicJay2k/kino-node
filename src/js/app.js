import express from "express";
import { engine } from "express-handlebars";
import { fetchMovies, fetchMovie } from "./modules/fetchData.js";
import __dirname from "express";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/movies", async (req, res) => {
  try {
    const movies = await fetchMovies();
    res.render("movies", { movies });
    //console.log(movies);
  } catch (err) {
    console.log(err);
  }
});

app.get("/:movieId", async (req, res) => {
  try {
    const movie = await fetchMovie(req.params.movieId);
    res.render("movie", { movie });
    console.log(movie);
  } catch (err) {
    console.log(err);
  }
});

app.use(express.static("./"));

export default app;
