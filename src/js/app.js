import express from "express";
import { engine } from "express-handlebars";
import { fetchMovies } from "./modules/fetchData.js";

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
    console.log(movies);
  } catch (err) {
    console.log(err);
  }
});

app.use(express.static("./"));

export default app;
