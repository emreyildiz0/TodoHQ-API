const { Todo } = require('../models');

exports.createTodo = async (req, res, next) => {
    try {
        const { title } = req.body;
        const todo = await Todo.create({ title, userId: req.user.id});
        res.status(201).json(todo);
    } catch (error) {
        next(error);
    }
};

exports.listTodos = async (req, res, next) => {
    try {
        const todos = await Todo.findAll({ where: { userId: req.user.id } });
        res.json(todos);
    } catch (error) {
        next(error);
    }
};

exports.markTodoCompleted = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findOne({ where: { id, userId: req.user.id } });
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        todo.completed = true;
        await todo.save();
        res.json(todo);
    } catch (error) {
        next(error);
    }
};

exports.markTodoUncompleted = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findOne({ where: { id, userId: req.user.id } });
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        todo.completed = false;
        await todo.save();
        res.json(todo);
    } catch (error) {
        next(error);
    }
};

exports.deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findOne({ where: { id, userId: req.user.id } });
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        await todo.destroy();
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        next(error);
    }
};
