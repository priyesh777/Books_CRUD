const express = require('express');
const Book = require('../model/model');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    }
    catch (error) {
        console.log('Catched an error::', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createBook= async (req, res) => {
    try {
        const {
            id,
            BooksName,
            ISBN,
            Author,
            Genre,
            Rating,
        } = req.body;
        const newBook = await Book.create({
            id,
            BooksName,
            ISBN,
            Author,
            Genre,
            Rating,
        });
        res.json(newBook);
    }
    catch (error) {
        console.log('Catched an error::', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            BooksName,
            ISBN,
            Author,
            Genre,
            Rating,
        } = req.body;
        const updateBook = await Book.findByIdAndUpdate(
            id,
            {
                BooksName,
                ISBN,
                Author,
                Genre,
                Rating,
            },
            { new: true },
        );
        res.json(updateBook);
    }
    catch (error) {
        console.log('Catched an error::', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            BooksName,
            ISBN,
            Author,
            Genre,
            Rating,
        } = req.body;
        const updateBook = await Book.findByIdAndDelete(id, {
            BooksName,
            ISBN,
            Author,
            Genre,
            Rating,
        }, { new: true });
        res.json(updateBook)
    }
    catch (error) {
        console.log('Catched an error::', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}