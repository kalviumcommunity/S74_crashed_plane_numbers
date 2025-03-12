router.get("/crashes", async (req, res) => {
    try {
        const crashes = [
            { id: 1, title: "Flight 123 Crash", year: 1999, location: "New York, USA", summary: "A tragic crash due to engine failure." },
            { id: 2, title: "Airline X Disaster", year: 2005, location: "Tokyo, Japan", summary: "Severe turbulence caused loss of control." }
        ];
        res.json(crashes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
