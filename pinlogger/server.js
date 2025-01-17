const express = require('express');
const app = express();
const PORT = 3001;

console.log("starting server");

// Middleware to parse JSON
app.use(express.json());

// Sample data
let logs = [];

app.post('/api/logs', (req, res) => {
    console.log("hi");
    const log = req.body;
    logs.push(log);
    console.log(log);
    res.status(201).end()
});

// Start server
app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
});
