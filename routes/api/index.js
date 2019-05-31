const express = require("express");
const router = express.Router();

// Book model
const Todo = require("../../models/toDoItem");

// @route   GET api/todos
// @desc    Get all todos
// @access   Public
router.get("/", (req, res) => {
  Todo.find({})
    // possible sort area
    .then(todo => res.send(todo));
});

// @route   POST api/todos
// @desc    Create a Todo
// @access   Public
router.post("/", (req, res) => {
  const { title, author, description, completed, date } = req.body;
  const newTodo = new Todo({
    title,
    author,
    description,
    completed,
    date
  });
  newTodo
    .save()
    .then(console.log(newTodo))
    .then(todo => res.json(todo))
    .catch(err => console.log(err));
});

// @route   DELETE api/todo/id
// @desc    Delete a Todo
// @access   Public
router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  Todo.findById({ _id: req.params.id })
    .then(todo => todo.remove())
    .catch(err => res.status(422).json(err));
});

module.exports = router;
