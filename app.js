const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("Inside middleware");
    next();
});

app.use("/", (req, res, next) => {
    console.log("Main page");
    next();
});

app.listen(3000);