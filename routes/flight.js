import express from "express";
import {getAvailableFlights, bookFlight } from "../controllers/flightController.js";

const router = express.Router();

router.get("/flights", getAvailableFlights)

router.post("/book-flight", bookFlight)

export default router;