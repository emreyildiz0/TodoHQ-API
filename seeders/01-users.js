'use strict';

const faker = require('faker');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

module.exports = {
    up: async (queryInterface) => {
        const users = [];
        for (let i = 0; i < 10; i++) {
            const user = {
                id: uuidv4(),
                name: faker.name.firstName(),
                email: faker.internet.email(),
                password: await bcrypt.hash("password", 10),
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            users.push(user);
        }
        await queryInterface.bulkInsert('Users', users);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
