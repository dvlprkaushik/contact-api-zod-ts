import express from "express";
import dotenv from "dotenv";
import { healthCheck } from "./utils/HealthCheck.js";
import { listener } from "./listener.js";

dotenv.config({ quiet: true });

const app = express();

healthCheck(app);

listener(app);
