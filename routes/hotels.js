import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
  createManyHotels,
} from "../controllers/hotelController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


router.post("/", verifyAdmin, createHotel);


router.post("/all", createManyHotels);


router.get("/countByCity", countByCity);
router.get("/countByType", countByType);


router.get("/room/:id", getHotelRooms);


router.get("/", getHotels);


router.get("/:id", verifyAdmin, getHotel);


router.put("/:id", verifyAdmin, updateHotel);


router.delete("/find/:id", verifyAdmin, deleteHotel);


router.get("/find/:id", getHotel);

export default router;
