const mongoose = require("mongoose");

const PlaneCrashSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    location: { type: String, required: true },
    summary: { type: String, required: true },
});

const PlaneCrash = mongoose.model("PlaneCrash", PlaneCrashSchema);
module.exports = PlaneCrash;
