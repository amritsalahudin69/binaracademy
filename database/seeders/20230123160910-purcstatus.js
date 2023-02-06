'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('purcstatuses', [
      {
        namestatus  : 'Unpaid',
        deskripsi   : 'Belum Terbayar'
      },
      {
        namestatus  : 'Paid',
        deskripsi   : 'Terbayar'
      },
      {
        namestatus  : 'Cancel',
        deskripsi   : 'Batal Terbayar'
      },
      {
        namestatus  : 'Pending',
        deskripsi   : 'Menunggu Pembayaran'
      },
      {
        namestatus  : 'Settle',
        deskripsi   : 'Selesai Transaksi'
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('purcstatuses', null, {});
  }
};
