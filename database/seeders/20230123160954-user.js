'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('users', [
    {
      username: 'Bambang',
      useremail: 'bams@mail.com',
      userpass: '40bd001563085fc35165329ea1ff5c5ecbdbbeef',
      id_status: 4,
      avail_ : 1,
      desc_ : 'sha1 default 123'
    },
    {
      username: 'Lilik',
      useremail: 'lilik@mail.com',
      userpass: '40bd001563085fc35165329ea1ff5c5ecbdbbeef',
      id_status: 5,
      avail_ : 1,
      desc_ : 'sha1 default 123'
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('users', null, {});

  }
};
