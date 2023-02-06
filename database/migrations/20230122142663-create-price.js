'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('prices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_product: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references :{
          model : "products",
          key : "id",
          as : "id_product"
        }
      },
      tpack: {
        type: Sequelize.STRING
      },
      hpp: {
        type: Sequelize.DOUBLE
      },
      hjp: {
        type: Sequelize.DOUBLE
      },
      avail_: {
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('prices');
  }
};
