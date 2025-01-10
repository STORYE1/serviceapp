'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Step 1: Remove the old 'categories' column (if it hasn't been done already)
    // In case it's not removed, make sure this operation is idempotent


    // Step 2: Add the new 'category_id' column with references to the 'categories' table
    await queryInterface.addColumn('tours', 'category_id', {
      type: Sequelize.INTEGER,
      allowNull: true, // Allow NULL temporarily
      references: {
        model: 'categories', // Reference to the 'categories' table
        key: 'category_id',  // Reference to the 'category_id' column
      },
      onDelete: 'CASCADE', // Optional: Define the action when the category is deleted
    });
  },

  down: async (queryInterface, Sequelize) => {
    // In case you need to rollback, remove the 'category_id' column and add back 'categories'
    await queryInterface.removeColumn('tours', 'category_id');

    await queryInterface.addColumn('tours', 'categories', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  }
};
