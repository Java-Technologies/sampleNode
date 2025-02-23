const express = require("express");
const ServerlessHttp = require("serverless-http");

const app = express();
const port = 3000;

// Define a GET API
app.get("/hello", (req, res) => {
    res.json({ message: "Hello from eExpress.js!" });
});


module.exports.handler = ServerlessHttp(app);