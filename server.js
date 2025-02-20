const express = require("express");

const app = express();
const port = 3000;

// Define a GET API
app.get("/hello", (req, res) => {
    res.json({ message: "Hello from Express.js!" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
