'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      useremail: {
        type: Sequelize.STRING
        },
      username: {
        type: Sequelize.STRING
      },
      userpass: {
        type: Sequelize.STRING
      },
      id_status: {
        type: Sequelize.INTEGER,
        allowNull : true,
        references : {
          model : "userstatuses",
          key : "id",
          as : "id_status"
        }
      },
      avail_: {
        type: Sequelize.INTEGER
      },
      desc_: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('sys_users');
  }
};