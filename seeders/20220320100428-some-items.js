"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoItems", [
      {
        task: "Ligar pro Hermes",
        todoListId: 1,
        deadline: "today",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Falar com Renato",
        todoListId: 2,
        deadline: "tomorrow",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Participar na festa como animador",
        todoListId: 5,
        deadline: "saturday",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Gravacao especial Hermes e Renato",
        deadline: "this month",
        todoListId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Preparar roteiro Tela Class",
        todoListId: 4,
        deadline: "this week",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Preparar programa do Bozo",
        todoListId: 3,
        deadline: "next week",
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
    await queryInterface.bulkDelete("todoItems", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
