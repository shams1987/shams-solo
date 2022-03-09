'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Answers', [
      {
        userId: 1,
        questionId: 3,
        answer: 'demo answer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        questionId: 2,
        answer: 'demo answer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        questionId: 1,
        answer: 'demo answer',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Answers', null, {});
  }
};
