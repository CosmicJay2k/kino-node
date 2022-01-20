import express from "express";
import { engine } from "express-handlebars";
import { fetchMovies, fetchMovie } from "./modules/fetchData.js";
import { marked } from "marked";

const app = express();

app.engine(
  "handlebars",
  engine({
    helpers: {
      markdown: (md) => marked(md),
    },
  })
);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/movies", async (req, res) => {
  const movies = await fetchMovies();
  if (movies) {
    res.render("movies", { movies });
  } else {
    res.status(404).render("movies404");
  }
});

app.get("/movies/:movieId", async (req, res) => {
  const movie = await fetchMovie(req.params.movieId);
  if (movie) {
    res.render("movie", { movie });
  } else {
    res.status(404).render("movie404");
  }
});

app.use("/src", express.static("./src"));

app.get("/*", (req, res) => {
  res.status(404).render("404");
});
export default app;
