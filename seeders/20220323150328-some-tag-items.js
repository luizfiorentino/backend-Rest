"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("itemTags", [
      {
        todoItemId: 1,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        todoItemId: 1,
        tagId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        todoItemId: 2,
        tagId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        todoItemId: 3,
        tagId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        todoItemId: 6,
        tagId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        todoItemId: 5,
        tagId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        todoItemId: 4,
        tagId: 4,
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
    await queryInterface.bulkDelete("itemTags", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
