// index.js, Priyesh Gautam, 200568939, 2/16/2024
// index.js, Chandrika Ghale, 200575692, 2/16/2024
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const InitiateMongoServer = require('./db');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const bookRoutes = require('./src/routes/routes.js');


const app = express();
const port = 3000;

//Initialize MongoDB connection
InitiateMongoServer();

//Read the data from books.json
const data = JSON.parse(fs.readFileSync('./books.json', 'utf-8'));
//console.log('Read data from book.json::', data);

const mongoURI = process.env.MONGODB_URL;
mongoose.connect(mongoURI).then(() => {
    importData();
})

//Import Data into the MongoDB server if the collection is empty
const importData = async () => {
    try {
        const Book = require('./src/model/model.js');
        //check if the collection is empty
        const count = await Book.countDocuments();
        if (count === 0) {
            await Book.create(data);
            console.log('The book data succesfully imported to MongoDB');
        }
        else {
            console.log('Data already exists::');
        }
    }
    catch (error) {
        console.log('This is the catched error::>>', error);
        throw error;
    }
};

app.use('/book', bookRoutes);

app.listen(port, () => {
    console.log(`Assignment 2 - CRUD application on the port: ${port}!`);
})