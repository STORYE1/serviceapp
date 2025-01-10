'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Create 'media' table
    await queryInterface.createTable('media', {
      media_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      tour_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tours', // The 'tours' table where the foreign key refers
          key: 'tour_id',
        },
        onDelete: 'CASCADE', // Optional: specify what happens on tour delete
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    // Drop 'media' table in case of rollback
    await queryInterface.dropTable('media');
  },
};
