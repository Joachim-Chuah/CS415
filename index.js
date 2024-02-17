/**
 * I tried to challenge myself and use node.js since we have already used it in one example. 
 * I definitely turned to google and youtube for some help in this. 
 */

// setting up express and swagger
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// setting app as an express framework and setting the port 3000 to be listened on using express.js server
const app = express();
const port = process.env.PORT || 3000;

// telling app to use express.json
app.use(express.json());

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// In-memory data store using let keyword
let items = {};

// Generate unique ID for items 
const generateId = () => `item_${Date.now()}`; 

// Define routes

// Get all items
app.get('/', (req, res) => {
    res.send('Welcome to my API! Access /api-docs for the documentation.');
});

// Create a new item
app.post('/items', (req, res) => {
    const id = generateId();
    items[id] = req.body; 
    res.status(201).send({ id: id, item: items[id] });
});

// Update an existing item
app.put('/items/:id', (req, res) => {
    const id = req.params.id;
    if (!items[id]) {
        return res.status(404).send('Item not found.');
    }
    items[id] = req.body;
    res.send({ id: id, item: items[id] });
});

// Delete an item
app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    if (!items[id]) {
        return res.status(404).send('Item not found.');
    }
    delete items[id];
    res.status(204).send();
});

// Starting the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
