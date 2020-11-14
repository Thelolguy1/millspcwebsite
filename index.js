const express = require("express");
const app = express();


app.locals.basedir = __dirname;
app.use("/assets", express.static(__dirname + "/public/assets"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});

app.post("/dashboard", (req, res) => {
    res.sendFile(__dirname + "/public/dashboard.html");
});

app.get("/support", (req, res) => {
    res.sendFile(__dirname + "/public/support.html");
});

app.get("/homebutton", (req, res) => {
    res.sendFile(__dirname + "/public/button.html");
});

app.get("/data/parts", (req, res) => {
    res.sendFile(__dirname + "/clubdata/partlists.json");
});

app.get("/sitemap.xml", (req, res) => {
    res.sendFile(__dirname + "/sitemap.xml");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
});



app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/404.html");
});



app.listen(100);
require("dotenv").config();
module.exports = app;
