const express = require("express");
const router = express.Router();

const Todo = require("../../models/toDoItem");

// @route   GET api/todos
// @desc    Get all todos
// @access   Public
router.get("/", (req, res) => {
  Todo.find({}).then(todo => res.send(todo));
});

// @route   POST api/todos
// @desc    Create a Todo
// @access   Public
router.post("/", (req, res) => {
  const {
    title,
    author,
    description,
    completed,
    submitted_at,
    completed_at
  } = req.body;
  const newTodo = new Todo({
    title,
    author,
    description,
    completed,
    submitted_at,
    completed_at
  });
  newTodo
    .save()
    .then(console.log(newTodo))
    .then(todo => res.json(todo))
    .catch(err => console.log(err));
});

// @route   PUT api/todos
// @desc    Update a Todo
// @access   Public
router.put("/:id", (req, res) => {
  const {
    title,
    author,
    description,
    completed,
    submitted_at,
    completed_at
  } = req.body;
  console.log("Put/update: ", req.params.id);
  Todo.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: title, author, description, completed, submitted_at, completed_at },
    function(err, res) {
      if (err) throw err;
      console.log(res);
    }
  );
});

// @route   DELETE api/todo/id
// @desc    Delete a Todo
// @access   Public
router.delete("/:id", (req, res) => {
  console.log("Delete: ", req.params.id);
  Todo.findById({ _id: req.params.id })
    .then(todo => todo.remove())
    .catch(err => res.status(422).json(err));
});

module.exports = router;
