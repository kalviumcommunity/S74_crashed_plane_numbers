require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3000;

const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
    try {
        await client.connect();
        console.log("✅ Database Connected Successfully!");
    } catch (error) {
        console.error("❌ Database Connection Failed:", error);
    }
}

connectDB();

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.get("/", async (req, res) => {
    const isConnected = client.topology && client.topology.isConnected();
    res.json({ database_status: isConnected ? "Connected" : "Not Connected" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
