import app from "../src/js/app.js";
import request from "supertest";

test("show landing page when requested", async () => {
  const response = await request(app).get("/").expect(200);
});

test("show right name for movie on that movies page", async () => {
  const response = await request(app).get("/2").expect(200);

  expect(response.text.includes("Godfather")).toBeTruthy();
});
