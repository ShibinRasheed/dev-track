import express from "express";
import { errorMiddleware } from "./shared/http/error.middleware.js";

const app = express();

app.use(express.json());
app.use(errorMiddleware);

app.get("/", (_req, res) => {
  res.json({
    message: "DevTrack API",
  });
});

export { app };
