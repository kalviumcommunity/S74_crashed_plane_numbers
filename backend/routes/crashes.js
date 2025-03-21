const express = require("express");
const PlaneCrash = require("../models/PlaneCrash");

const router = express.Router();

// Fetch All Crashes
router.get("/crashes", async (req, res) => {
    try {
        const crashes = await PlaneCrash.find();
        res.json(crashes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch Single Crash by ID
router.get("/crashes/:id", async (req, res) => {
    try {
        const crash = await PlaneCrash.findById(req.params.id);
        if (!crash) return res.status(404).json({ error: "Crash not found" });
        res.json(crash);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add New Crash with Validation
router.post("/crashes", async (req, res) => {
    try {
        const { title, year, location, summary } = req.body;

        if (!title || !year || !location || !summary) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (typeof year !== "number" || year < 1900) {
            return res.status(400).json({ error: "Year must be a number and 1900 or later" });
        }

        const newCrash = new PlaneCrash(req.body);
        await newCrash.save();
        res.status(201).json({ message: "Crash data added successfully!", crash: newCrash });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Update Crash by ID with Validation
router.put("/crashes/:id", async (req, res) => {
    try {
        const { title, year, location, summary } = req.body;

        if (!title || !year || !location || !summary) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (typeof year !== "number" || year < 1900) {
            return res.status(400).json({ error: "Year must be a number and 1900 or later" });
        }

        const updatedCrash = await PlaneCrash.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCrash) return res.status(404).json({ error: "Crash not found" });
        res.json({ message: "Crash updated successfully!", crash: updatedCrash });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Delete Crash by ID
router.delete("/crashes/:id", async (req, res) => {
    try {
        const deletedCrash = await PlaneCrash.findByIdAndDelete(req.params.id);
        if (!deletedCrash) return res.status(404).json({ error: "Crash not found" });
        res.json({ message: "Crash deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
