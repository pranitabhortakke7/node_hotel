const express = require('express');
const router = express.Router();
const Task = require('./../models/task');

router.post('/api/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);       // Create new task
    await task.save();                     // Save to DB
    res.status(201).send(task);            // Success response
  } catch (error) {
    console.error('Error creating task:', error.message); // Optional debug
    res.status(400).send({ error: error.message });       // Send error message
  }
});

router.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();  // Fetch all tasks
    res.status(200).send(tasks);      // Send the tasks in response
  } catch (error) {
    console.error('Error fetching tasks:', error.message);
    res.status(500).send({ error: 'Internal server error' });
  }
});

module.exports = router;