const Prospect=require("../models/Prospect");


// CREATE PROSPECT
 const createProspect= async (req,res)=>{
    try {
        const newProspect= Prospect(req.body);
        const prospects= await newProspect.save();
        res.status(201).json(prospects);
    } catch (error)
    {
        res.status(500).json(error);    
    }
 };

 //GET ALL PROSPECTS
 const getAllprospects= async (req,res)=>{
    try {
        const prospects= await Prospect.find().sort({createdAt: -1});
        res.status(200).json(prospects);

    } catch (error) {
        res.status(500).json(error);
    }
 };

 //UPDATE PROSPECT
 const updateProspect = async (req, res) => {
    try {
      const updateProspect = await Prospect.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(201).json(updateProspect);
    } catch (error) {
      console.error("Error updating prospect:", error); // Log the error
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  };


// GET ONE PROSPECT

const getOneProspect= async(req,res)=>{
    try {
        const prospects=await Prospect.findById(req.params.id);
        res.status(200).json(prospects);
    } catch (error) {
        res.status(500).json(error);
    }
};

// DELETE PROSPECT

const deleteProspect= async(req,res)=>{
    try {
        await Prospect.findByIdAndDelete(req.params.id);
        res.status(201).json("Prospect deleted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
};




module.exports={deleteProspect,getOneProspect, getAllprospects,updateProspect, createProspect};