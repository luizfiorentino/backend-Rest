"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("tags", [
      {
        title: "Code green",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Code Yellow",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Code Orange",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Code Purple",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Code Red",
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
    await queryInterface.bulkDelete("tags", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
