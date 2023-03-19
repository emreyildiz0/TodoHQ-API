const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authenticationMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(decoded.user.id);
        if (!user) {
            throw new Error();
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Authentication required' });
    }
};

module.exports = authenticationMiddleware;
