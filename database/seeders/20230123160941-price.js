'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('prices', [
        {
          id_product: 2,
          tpack: 'Unit Only',
          hpp : 25000000,
          hjp : 30000000,
          avail_: 1,
        },
        {
          id_product: 4,
          tpack: 'Unit Only + Acc',
          hpp : 15000000,
          hjp : 21000000,
          avail_: 1,
        },
        {
          id_product: 1,
          tpack: 'Unit Only',
          hpp : 35000000,
          hjp : 55000000,
          avail_: 1,
        },
        {
          id_product: 3,
          tpack: 'Isi 5',
          hpp : 1000000,
          hjp : 2000000,
          avail_: 1,
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('prices', null, {});
  }
};
