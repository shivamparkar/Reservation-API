import express from "express";
import {
    updateUser,
    deleteUser,
    getUser,
    getAllUsers,
  } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, you are loged in");
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, you are loged in and you can delete you account");
// })


// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are loged in and you can delete all account");
// })



//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser,deleteUser);

//GET
router.get("/:id",verifyUser, getUser);

//GET ALL
router.get("/", getAllUsers);

export default router;