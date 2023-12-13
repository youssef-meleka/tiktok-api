// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3000; // You can change this to any port you prefer

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, this is a simple Express app!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
