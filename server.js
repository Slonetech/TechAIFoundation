const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('.'));

// Handle form submissions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route for form submission
app.post('/thank-you', (req, res) => {
    console.log('Form submitted:', req.body);
    res.redirect('/thank-you.html');
});

// Route for thank-you page
app.get('/thank-you', (req, res) => {
    res.sendFile(path.join(__dirname, 'thank-you.html'));
});

// Catch all other routes and serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Form submissions will be logged to console');
});
