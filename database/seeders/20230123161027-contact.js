'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('contacts', [
    {
      id_user: 1,
      nameadd: 'alamat Rumah',
      addr : 'Jl. ditemukan no 3',
      avail_ : 1
    },
    {
      id_user: 1,
      nameadd: 'alamat Kantor',
      addr : 'jl. Thamrin no 72',
      avail_ : 1
    },
    {
      id_user: 2,
      nameadd: 'alamat Rumah',
      addr : 'Jl. Welahan Raya 3',
      avail_ : 1
    },
    ], {});

  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('contacts', null, {});
  }
};
