'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tours', {
      tour_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id',
        },
      },
      tour_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tour_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tour_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      languages: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      ticket_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      leader_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      leader_profile_pic: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      leader_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tour_days: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      tour_timings: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      cities: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      categories: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      guide_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      guide_phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      guide_email_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tours');
  }
};
