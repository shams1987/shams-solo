'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Questions', [
      {
        userId: 1,
        title: 'How do I repair a damaged nib?',
        imageUrl: 'https://www.nibs.com/sites/default/files/USAParker35_Before.jpg',
        description: 'I dropped my pen and the nib is very bent. Is this repairable?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: 'Why is my pen leaking ink?',
        imageUrl: 'https://preview.redd.it/m0pir27buph21.jpg?width=4032&format=pjpg&auto=webp&s=3aec52acb4d75e591a78126505265152f036cccf',
        description: 'Every time I use this old blue ink, my pen leaks.  Is it the ink or the pen?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        title: 'How can I improve my handwriting?',
        imageUrl: 'https://media.istockphoto.com/photos/calligraphy-pen-and-letter-closeup-photo-picture-id172741047?b=1&k=20&m=172741047&s=170667a&w=0&h=RnDkoiVlGxzqK7uwSBN66ReLW1WHgkmKLO5whC72m20=',
        description: 'My friend has excellent handwriting.  I bought a new fountain pen and I cannot write like her.  Are there online tutorials?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        title: 'Should I buy this pen?',
        imageUrl: 'https://www.luxurysafes.me/blog/wp-content/uploads/2018/12/The-10-Most-Expensive-Pens-in-the-World-featured.jpg',
        description: 'I want to make an investment.  Is it a good idea to buy Mystery Masterpiece by Mont Blanc?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        title: 'German or Japanese?',
        imageUrl: 'https://preview.redd.it/jsdky84x69w71.jpg?width=640&crop=smart&auto=webp&s=c63914a143dfcade1d694f2c7200937389220dd0',
        description: 'I was wondering what people on here prefer?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        title: 'How do I fill my pen?',
        imageUrl: 'https://static.turbosquid.com/Preview/2014/11/26__13_22_44/InkBottle_1.jpg23ba2528-51ca-49e2-b418-d2efa3c178e1Large.jpg',
        description: 'When the ink bottle gets low, I find it very difficult to fill my pens.  Any ideas?',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
