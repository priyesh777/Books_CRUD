const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controller/books.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/", authMiddleware, getAllBooks);
router.post("/", authMiddleware, createBook);
router.put("/:id", authMiddleware, updateBook);
router.delete("/:id", authMiddleware, deleteBook);

module.exports = router;
