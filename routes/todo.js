const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authenticationMiddleware');
const todoController = require('../controllers/todos');

// Routes for authenticated users
router.use(authMiddleware);

// Create
router.post('/', todoController.createTodo);

// Mark as completed
router.patch('/:id/completed', todoController.markTodoCompleted);

// Mark as uncompleted
router.patch('/:id/uncompleted', todoController.markTodoUncompleted);

// Delete
router.delete('/:id', todoController.deleteTodo);

// List
router.get('/', todoController.listTodos);

module.exports = router;
