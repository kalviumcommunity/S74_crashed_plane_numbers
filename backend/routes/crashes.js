const express = require("express");
const PlaneCrash = require("../models/PlaneCrash"); // ✅ Import schema

const router = express.Router();

// ✅ GET Route - Fetch All Crashes from MongoDB
router.get("/crashes", async (req, res) => {
    try {
        const crashes = await PlaneCrash.find(); // Fetch from MongoDB
        res.json(crashes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ POST Route - Add New Crash Data to MongoDB
router.post("/crashes", async (req, res) => {
    try {
        const { title, year, location, summary } = req.body;

        if (!title || !year || !location || !summary) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const newCrash = new PlaneCrash({ title, year, location, summary });
        await newCrash.save();

        res.status(201).json({ message: "Crash data added successfully!", crash: newCrash });
    } catch (error) {
        console.error("Error adding crash data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
