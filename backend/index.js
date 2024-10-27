const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json("Kelowna Solutions API is running")
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log("App Running")
})