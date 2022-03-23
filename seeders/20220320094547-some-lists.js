"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoLists", [
      {
        name: "Renato's personal afazeres",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hermes' todo's",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joselito's professional todo's",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Luis Bossa's personal list",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joselito's personal stuff",
        userId: 3,
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
    await queryInterface.bulkDelete("todoLists", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
