'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Question.associate = function (models) {
    // associations can be defined here
    // FOR CASCADING DELETE , onDelete: 'CASCADE', hooks: true
    Question.belongsTo(models.User, { foreignKey: 'userId' });
    Question.hasMany(models.Answer, { foreignKey: 'questionId' });
  };
  return Question;
};
