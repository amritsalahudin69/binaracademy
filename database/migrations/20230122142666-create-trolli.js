'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('trollis', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull : true,
        references : {
          model : "users",
          key : "id",
          as : "id_user"
        }
      },
      avail_: {
        type: Sequelize.INTEGER
      },
      nametroll: {
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

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable('trollis');
  }
};
