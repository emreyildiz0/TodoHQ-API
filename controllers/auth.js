const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const errorHandlerMiddleware = require('../middlewares/errorHandlerMiddleware');

async function signUp(req, res) {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });
        const token = jwt.sign({ user: { id: user.id, name: user.name, email: user.email } }, process.env.JWT_SECRET);
        res.json({ user: { id: user.id, name: user.name, email: user.email }, token });
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: {email} });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ user: { id: user.id, name: user.name, email: user.email } }, process.env.JWT_SECRET);
        res.json({ user: { id: user.id, name: user.name, email: user.email }, token });
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
}

module.exports = {
    signUp,
    login,
};
