const express=require("express");
const {createDonor, getAlldonors, updateDonor, getOnedonor, deleteDonor, getDonorStats} = require("../controllers/donor");
const router = express.Router();
const {verifyTokenAndAuthorization}=require("../middlewares/verifyToken");


//ADD DONOR
router.post("/", verifyTokenAndAuthorization, createDonor);


//GET ALL DONORS
router.get("/", getAlldonors);

//UPDATE DONOR
router.put("/:id", updateDonor);

// GET ONE DONOR
router.get("/find/:id", getOnedonor);

//DELETE DONOR
router.delete("/:id", deleteDonor);

//DONOR STATS
router.get("/stats", getDonorStats);






module.exports=router;