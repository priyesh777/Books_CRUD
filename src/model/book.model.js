const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Books Model
const BookSchema = new Schema({
  id: { type: String },
  booksName: { type: String },
  isbn: { type: Number },
  author: { type: String },
  genre: [{ type: String }],
  rating: { type: Number },
});

const Book = mongoose.model("Books", BookSchema);
module.exports = Book;
