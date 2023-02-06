'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('endusers', [
       {
        id_user:1,
        name_ : 'bambang Sujarwo',
        idcard : '33220213261921',
        primephone : '08246545644'
      },
      {
        id_user:2,
        name_ : 'Mulikun',
        idcard : '3322021326445',
        primephone : '08246545001'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('endusers', null, {});
  }
};
