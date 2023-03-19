const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development'];
const sequelize = new Sequelize(config);

const User = require('./User')(sequelize, DataTypes);
const Todo = require('./Todo')(sequelize, DataTypes);

module.exports = { User, Todo, sequelize};
