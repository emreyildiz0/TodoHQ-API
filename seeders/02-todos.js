'use strict';

const faker = require('faker');
const {User} = require('../models');
const {v4: uuidv4} = require("uuid");
module.exports = {
    up: async (queryInterface) => {
        const todos = [];
        const users = await User.findAll();
        for (let i = 0; i < 10; i++) {
            const todo = {
                id: uuidv4(),
                title: faker.lorem.sentence(),
                completed: Math.random() < 0.5,
                userId: users[Math.floor(Math.random() * users.length)].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            todos.push(todo);
        }
        await queryInterface.bulkInsert('Todos', todos);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Todos', null, {});
    }
};
