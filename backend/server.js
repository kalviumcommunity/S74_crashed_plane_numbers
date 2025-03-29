const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const crashRoutes = require("./routes/crashes"); // Import Routes

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Make sure the server can parse JSON

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Database Connected Successfully!"))
.catch((error) => console.error("❌ Database Connection Failed:", error));

// ✅ Use Crash Routes
app.use("/api", crashRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
