const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, required: true, default: false },
  date: { type: Date, required: true }
});

const ToDo = mongoose.model("To-do", todoSchema);

module.exports = ToDo;
