const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const POOL_URL = "stratum+tcp://btc.viabtc.io:3333";

app.post("/get-job", async (req, res) => {
    try {
        const job = await axios.get(POOL_URL);
        res.json(job.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch job from pool" });
    }
});

app.listen(3000, () => {
    console.log("Proxy server running on port 3000");
});
