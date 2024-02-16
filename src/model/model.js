const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    id: { type: Number },
    BooksName: { type: String },
    ISBN: { type: Number },
    Author: { type: String },
    Genre: [{ type: String }],
    Rating: { type: Number }
});

const Book = mongoose.model('Books', BookSchema);
module.exports = Book;