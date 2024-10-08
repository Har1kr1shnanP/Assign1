const express = require('express');
const app = express();
const PORT = 4000;

// Initialize an empty array to store products and counters for request types
let products = [];
let getRequestCount = 0;
let postRequestCount = 0;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log each incoming request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - Request received`);
    next();
});

// Handle GET requests to fetch all products
app.get('/products', (req, res) => {
    getRequestCount++;
    console.log(`> products GET: received request`);
    res.json(products);
    console.log(`< products GET: sending response`);
    console.log(`Processed Request Count --> Get:${getRequestCount}, Post:${postRequestCount}`);
});

// Handle POST requests to add a new product
app.post('/products', (req, res) => {
    postRequestCount++;
    console.log('> products POST: received request');
    
    const product = req.body;
    // Check if all required product fields are present
    if (!product.productId || !product.name || !product.price || !product.quantity) {
        return res.status(400).json({ error: 'Missing product fields' });
    }

    // Add the new product to the array
    products.push(product);
    res.status(201).json({ message: 'Product added successfully!', product });

    console.log(`< products POST: sending response`);
    console.log(`Processed Request Count --> Get:${getRequestCount}, Post:${postRequestCount}`);
});

// Handle DELETE requests to remove all products
app.delete('/products', (req, res) => {
    products = [];
    console.log(`> products DELETE: received request`);
    res.json({ message: 'All products deleted successfully!' });
    console.log(`< products DELETE: sending response`);
});

// Start the server and log the startup information
app.listen(PORT, () => {
    console.log(`Server is listening at http://127.0.0.1:${PORT}`);
    console.log(`Endpoints:
    http://127.0.0.1:${PORT}/products method: GET, POST, DELETE`);
});
