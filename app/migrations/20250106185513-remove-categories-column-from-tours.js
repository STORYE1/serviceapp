'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('tours', 'categories');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('tours', 'categories', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'category_id',
      },
    });
  }
};
