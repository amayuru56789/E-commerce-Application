const express = require("express");
const cors = require("cors");

const product = require("./product")

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to our online shop API...");
});

app.get("/product", (req, res) => {
    res.send(product);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));