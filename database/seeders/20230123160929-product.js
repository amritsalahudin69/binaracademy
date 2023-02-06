'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('products', [
      {
        nameprod : 'xiomay Ultra Pro Max One GTR RRZZ',
        avail_: 1,
        stock_: 25
      },
      {
        nameprod : 'Aduhdek Yeezy Boost 350 V2 Synth',
        avail_: 1,
        stock_: 100
      },
      {
        nameprod : 'Coklat Silverking x House of Knipschildt',
        avail_: 1,
        stock_: 601
      },
      {
        nameprod : 'sumsang Galaxy Z Fold4 Flip6 10G',
        avail_: 1,
        stock_: 15
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('products', null, {});
  }
};
