import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import moviesRouter from "./routes/movies.js";

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

app.use("/movies", moviesRouter);

app.use("/public", express.static("./public"));

app.get("/*", (req, res) => {
  res.status(404).render("404");
});

export default app;
