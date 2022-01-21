import app from "../src/js/app.js";
import request from "supertest";

test("show landing page when requested", async () => {
  const response = await request(app).get("/").expect(200);
});

// This test will fail if the API removes this specific movie
test("show movies page with movies when requested", async () => {
  const response = await request(app).get("/movies").expect(200);

  expect(response.text.includes("Idiocracy")).toBeTruthy();
});

test("show right name for movie on that movies page", async () => {
  const response = await request(app).get("/movies/2").expect(200);

  expect(response.text.includes("Godfather")).toBeTruthy();
});
