'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('consumers', 'otp', {
      type: Sequelize.STRING,
      allowNull: true, // Make it nullable for dynamic updates
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('consumers', 'otp');
  }
};
