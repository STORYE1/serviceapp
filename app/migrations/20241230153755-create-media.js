'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('media', {
      media_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tour_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tours', // Reference to the 'tours' table
          key: 'tour_id',
        },
      },
      type: {
        type: Sequelize.ENUM('image', 'video'),
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('media');
  }
};
