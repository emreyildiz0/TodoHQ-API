'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Todos', {
            id: {
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
                type: Sequelize.UUID,
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING
            },
            completed: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN
            },
            userId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Todos');
    }
};
