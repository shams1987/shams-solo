const express = require('express');
const asyncHandler = require('express-async-handler');
const { Answer } = require('../../db/models');
const router = express.Router();

// Read answers to one question
router.get(
    '/:id',
    asyncHandler(async function (req, res) {
        const answers = await Answer.findAll({
            where: {
                questionId: +req.params.id,
            },
        });

        return res.json(answers);
    })
);

// Create an answer
router.post('/', asyncHandler(async (req, res) => {
    const answer = await Answer.create(req.body);
    res.json(answer);
}));

// Delete an answer
router.delete(
    '/:id',
    asyncHandler(async function (req, res) {
        const answer = await Answer.findByPk(req.params.id);

        await Answer.destroy({ where: { id: answer.id } });
        return res.json({ id: answer.id });
    })
);



module.exports = router;
