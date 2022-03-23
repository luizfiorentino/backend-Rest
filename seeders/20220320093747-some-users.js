"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Hermes",
        email: "h@h$r.com",
        phone: 123456,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Renato",
        email: "r@h&r.com",
        phone: 654321,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joselito",
        email: "j@h&r.com",
        phone: 2345678,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Luis Bossa",
        email: "lb@h&r.com",
        phone: 33445566,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
