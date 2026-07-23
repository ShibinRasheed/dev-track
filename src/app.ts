import express from "express";
import { errorMiddleware } from "./shared/http/error.middleware.js";
import { healthRouter } from "./modules/health/health.routes.js";

const app = express();

app.use(express.json());
app.use(errorMiddleware);

app.use("/health", healthRouter);

app.get("/", (_req, res) => {
  res.json({
    message: "DevTrack API",
  });
});

export { app };
