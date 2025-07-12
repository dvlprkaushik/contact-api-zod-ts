import express from "express";
import dotenv from "dotenv";
import { healthCheck } from "./utils/HealthCheck.js";
import { listener } from "./listener.js";
import { contactRouter } from "./routes/contact.routes.js";
import { endpointLogger } from "./middlewares/endpointLogger.middleware.js";

dotenv.config({ quiet: true });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(endpointLogger);

healthCheck(app);

// * Routes
app.use("/api", contactRouter);

listener(app);