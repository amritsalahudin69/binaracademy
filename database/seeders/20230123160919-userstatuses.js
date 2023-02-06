'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('userstatuses', [
       {
        level_  :'12',
        name_   :'Suspen',
        desc_   :'akun disuspen',
        avail_  :1
       },
       {
        level_  :'13',
        name_   :'Nonaktif',
        desc_   :'akun nonaktif',
        avail_  :1
       },
       {
        level_  :'14',
        name_   :'Bronze',
        desc_   :'lvl 1',
        avail_  :1
       },
       {
        level_  :'15',
        name_   :'Silver',
        desc_   :'lvl 2',
        avail_  :1
       },
       {
        level_  :'16',
        name_   :'gold',
        desc_   :'lvl 3',
        avail_  :1
       },
       {
        level_  :'17',
        name_   :'Platinum',
        desc_   :'lvl 4',
        avail_  :1
       },
       {
        level_  :'18',
        name_   :'Private',
        desc_   :'lvl 5',
        avail_  :1
       },
    ], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('userstatuses', null, {});
  }
};
