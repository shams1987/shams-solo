const express = require('express');
const asyncHandler = require('express-async-handler');
const { Question } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateQuestion = [
    check('title')
        .notEmpty()
        .withMessage('Please provide a question.'),
    check('imageUrl')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an imageUrl.'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a description of your question.'),
    handleValidationErrors
];

// Read all questions
router.get(
    '/',
    asyncHandler(async function (req, res) {
        const questions = await Question.findAll();
        res.json(questions);
    })
);

// Create a question
router.post('/', validateQuestion, asyncHandler(async (req, res) => {
    const question = await Question.create(req.body);
    res.json(question);
}));

// Delete a question
router.delete(
    '/:id',
    asyncHandler(async function (req, res) {
        const question = await Question.findByPk(req.params.id);

        await Question.destroy({ where: { id: question.id } });
        return res.json({ id: question.id });
    })
);

// Update a question
router.put(
    '/:id', validateQuestion,
    asyncHandler(async function (req, res) {

        const { title, imageUrl, description } = req.body;
        const questionId = req.params.id;
        const question = await Question.findByPk(questionId);
        const newQuestion = await question.update({ title, imageUrl, description })
        return res.json(newQuestion);
    })
);




module.exports = router;
