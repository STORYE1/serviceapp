'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      category_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      label: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // Ensures unique 'value' (e.g., 'food', 'heritage')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    // This will drop the categories table if the migration is reverted
    await queryInterface.dropTable('categories');
  }
};
