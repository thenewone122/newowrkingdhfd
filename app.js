const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT||4000;

// Serve the index.html file when the root route is accessed
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
