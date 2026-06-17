const express = require("express");
const router = express.Router();

let tasks = [];
let id = 1;

// Submit Task
router.post("/tasks", (req, res) => {
  const task = {
    id: id++,
    title: req.body.title,
  };

  tasks.push(task);

  res.json({
    message: "Task submitted successfully",
    task,
  });
});

// Get Tasks
router.get("/tasks", (req, res) => {
  res.json(tasks);
});

module.exports = router;
