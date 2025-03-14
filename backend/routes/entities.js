const express = require("express");
const router = express.Router();
const Entity = require("../models/Entity");

// Add new entity
router.post("/", async (req, res) => {
  try {
    const newEntity = new Entity(req.body);
    const savedEntity = await newEntity.save();
    res.status(201).json(savedEntity);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all entities
router.get("/", async (req, res) => {
  try {
    const entities = await Entity.find();
    res.json(entities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
