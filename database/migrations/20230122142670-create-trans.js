'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transaksi', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_purcstatuses: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : "purcstatuses",
          key : "id",
          as : "id_purcstatuses"
        }
      },
      id_user:{
        type: Sequelize.INTEGER,
      },
      codetrans:{
        type: Sequelize.STRING,
      },
      total_bayar:{
        type : Sequelize.DOUBLE,
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
    await queryInterface.dropTable('transaksi');
  }
};