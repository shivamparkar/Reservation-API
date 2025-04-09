import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

import {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getHotel,
    getHotelRooms,
    getHotels,
    updateHotel,
  } from "../controllers/hotelController.js";

import {verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post("/", verifyAdmin, createHotel);


//Get
router.get("/",verifyAdmin, getHotels);


//Get By Id
router.get("/:id", verifyAdmin,getHotel);

//Update
router.put("/:id",verifyAdmin, updateHotel);


//Delete
router.delete("/:id",deleteHotel)


router.get("/find/:id", getHotel);

//Get All
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
