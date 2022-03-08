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
        imageUrl: 'https://2.bp.blogspot.com/-J_W27mVUSnQ/V2Ftd_-2nbI/AAAAAAAAAS0/hCFXtM7v-bEGXw7nqd-KchQ9CX71TT2VgCLcB/s1600/scppen.jpg',
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
        imageUrl: 'https://www.luxuryproperty.com/lifestyle/resize/375/435/30/aee16409d2a4b7d5e5c7bc2897c3e517.jpg',
        description: 'I want to make an investment.  Is it a good idea to buy Mystery Masterpiece by Mont Blanc?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        title: 'What about dip pens?',
        imageUrl: 'https://cdn.shopify.com/s/files/1/1760/4289/files/istockphoto-545588954-612x612_large.jpg?v=1551444200',
        description: 'I was wondering what people on here prefer?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        title: 'Does the shape of ink bottle matter?',
        imageUrl: 'https://preview.redd.it/w8k312pkz4581.jpg?width=640&crop=smart&auto=webp&s=d8efadacbedee5e77c911eef5b3c12b91f83acde',
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
