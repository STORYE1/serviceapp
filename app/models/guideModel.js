const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelizeConnection");

module.exports = (sequelize) => {
    const Tour = sequelize.define(
        "Tour",
        {
            tour_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },


            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'user_id',
                },
            },

            tour_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            tour_title: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            tour_description: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            languages: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false,
            },

            ticket_price: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },

            leader_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            leader_profile_pic: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            leader_description: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            tour_days: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false,
                validate: {
                    notEmpty: true,
                    isArray(value) {
                        if (!Array.isArray(value)) {
                            throw new Error('Tour days must be an array.');
                        }
                    },
                },
            },
            tour_timings: {
                type: DataTypes.ARRAY(DataTypes.JSON),
                allowNull: false,
                validate: {
                    notEmpty: true,
                    isArray(value) {
                        if (!Array.isArray(value)) {
                            throw new Error('Tour timings must be an array of objects.');
                        }
                    },
                },
            },

            cities: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false,
            },

            category_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'categories',
                    key: 'category_id',
                },
            },


            guide_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            guide_phone: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            guide_email_id: {
                type: DataTypes.STRING,
                allowNull: true,
            }
        },

        {
            tableName: "tours",
            timestamps: true,
        }
    );

    return Tour;
};
