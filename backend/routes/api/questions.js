const express = require('express');
const asyncHandler = require('express-async-handler');
const { Question } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async function (req, res) {
        const questions = await Question.findAll();
        res.json(questions);
    })
);
router.post('/', asyncHandler(async (req, res) => {
    const question = await Question.create(req.body);
    res.json(question);
}));
router.delete(
    '/:id',
    asyncHandler(async function (req, res) {
        const question = await Question.findByPk(req.params.id);
        //if (!question) throw new Error('Cannot find item');

        await Question.destroy({ where: { id: question.id } });
        return res.json({ id: question.id });
    })
);

module.exports = router;
