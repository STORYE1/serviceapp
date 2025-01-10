'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tours', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tour_days: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      tour_timings: {
        type: Sequelize.ARRAY(Sequelize.JSON), // Store timings as an array of JSON objects
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tours');
  },
};
