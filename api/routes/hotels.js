import express from "express";
import Hotel from "../models/Hotel.js"
import { createError } from '../utils/error.js';
import { deleteHotel, getHotel, getHotels, updateHotel,createHotel, countByCity, countByType,  getHotelRooms} from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//CREATE
router.post("/",verifyAdmin,createHotel);

//UPDATE
router.put("/:id",verifyAdmin,updateHotel);

//DELETE
router.delete("/:id",verifyAdmin,deleteHotel);

//GET
router.get("/find/:id",getHotel);

//GETALL
router.get("/",getHotels);
router.get("/countByCity",countByCity);
router.get("/countByType",countByType);
router.get("/room/:id", getHotelRooms);

export default router