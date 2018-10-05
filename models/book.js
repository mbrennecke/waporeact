const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  topic: { type: String, required: true },
  year: { type: String, required: true },
  summary: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Article;
