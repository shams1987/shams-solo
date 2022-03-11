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
        answer: 'demo answer for question id 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        questionId: 2,
        answer: 'demo answer for question id 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        questionId: 1,
        answer: 'demo answer for question id 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        questionId: 1,
        answer: 'demo answer for question id 1 testing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        questionId: 1,
        answer: 'demo answer for question id 1 again',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        questionId: 1,
        answer: 'more answers',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        questionId: 1,
        answer: 'sdfsdfsdsdfdfsdfsd',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        questionId: 1,
        answer: 'a quick brown fox jumps over the lazy dog',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        questionId: 1,
        answer: 'hello there',
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
