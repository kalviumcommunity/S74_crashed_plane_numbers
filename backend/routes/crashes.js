const express = require("express");
const router = express.Router();
const PlaneCrash = require("../models/PlaneCrash");

// ✅ Create a New Plane Crash Record
router.post("/crashes", async (req, res) => {
    try {
        console.log("Received Data:", req.body); // ✅ Check received data

        const { title, year, location, summary, created_by } = req.body;

        if (!title || !year || !location || !summary || !created_by) {
            return res.status(400).json({ error: "All fields, including created_by, are required" });
        }

        if (typeof year !== "number" || year < 1900) {
            return res.status(400).json({ error: "Year must be a number and 1900 or later" });
        }

        const newCrash = new PlaneCrash({ title, year, location, summary, created_by });
        await newCrash.save();
        res.status(201).json({ message: "Crash data added successfully!", crash: newCrash });
    } catch (error) {
        console.error("Error saving crash:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Fetch All Plane Crash Records
router.get("/crashes", async (req, res) => {
    try {
        const crashes = await PlaneCrash.find();
        res.json(crashes);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Fetch Single Plane Crash by ID
router.get("/crashes/:id", async (req, res) => {
    try {
        const crash = await PlaneCrash.findById(req.params.id);
        if (!crash) return res.status(404).json({ error: "Crash not found" });
        res.json(crash);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Update Plane Crash Record
router.put("/crashes/:id", async (req, res) => {
    try {
        const { title, year, location, summary, created_by } = req.body;

        if (!title || !year || !location || !summary || !created_by) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const updatedCrash = await PlaneCrash.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedCrash) return res.status(404).json({ error: "Crash not found" });

        res.json({ message: "Crash updated successfully", crash: updatedCrash });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Delete Plane Crash Record
router.delete("/crashes/:id", async (req, res) => {
    try {
        const deletedCrash = await PlaneCrash.findByIdAndDelete(req.params.id);
        if (!deletedCrash) return res.status(404).json({ error: "Crash not found" });

        res.json({ message: "Crash deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
    