'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('purcs', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_trolli: {
        type: Sequelize.INTEGER,
        allowNull : true,
        references : {
          model : "trollis",
          key : "id",
          as : "id_trolli"
        }
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
      codetrans:{
        type: Sequelize.STRING
      },
      grandtotal:{
        type: Sequelize.DOUBLE
      },
      qty:{
        type: Sequelize.INTEGER
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
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('purcs');

  }
};
