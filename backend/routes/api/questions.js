const express = require('express');
const asyncHandler = require('express-async-handler');
const { Question } = require('../../db/models');

const router = express.Router();

// Read all questions
router.get(
    '/',
    asyncHandler(async function (req, res) {
        const questions = await Question.findAll();
        res.json(questions);
    })
);

// Create a question
router.post('/', asyncHandler(async (req, res) => {
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
    '/:id',
    asyncHandler(async function (req, res) {

        const { title, imageUrl, description } = req.body;
        const questionId = req.params.id;
        const question = await Question.findByPk(questionId);
        const newQuestion = await question.update({ title, imageUrl, description })
        return res.json(newQuestion);
    })
);




module.exports = router;
