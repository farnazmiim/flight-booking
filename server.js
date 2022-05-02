const express = require("express");
const { default: App } = require("./src/App");
const PORT = 5000;

const app = express();

app.get("/offers/off_0000AJ2dvR4LuVMIf5iYk7", (req, res) => {
    res.send("!!!!"); });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
