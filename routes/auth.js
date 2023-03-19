const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

// Signup
router.post('/signup', authController.signUp);

// Login
router.post('/login', authController.login);

module.exports = router;
