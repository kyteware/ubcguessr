const express = require('express');
const fs = require('node:fs');

const app = express();
const PORT = 3001;

console.log("starting server");

// Middleware to parse JSON
app.use(express.json());

// Sample data
let logs = [];

app.post('/api/logs', (req, res) => {
    const log = req.body;
    logs.push(log);
    console.log(log);
    res.status(201).end()

    fs.appendFile("./pins.txt", JSON.stringify(log) + "\n", err => {
        if (err) {
            console.log("its so over noooo: " + err);
        } else {
            console.log("log added");
        }
    })
});

app.get('/test', (_req, res) => {
    console.log("tester hi");
    res.status(201).end();
});

// Start server
app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
});
