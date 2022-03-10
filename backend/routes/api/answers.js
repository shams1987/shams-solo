const express = require('express');
const asyncHandler = require('express-async-handler');
const { Answer } = require('../../db/models');
const router = express.Router();

// Read answers to one question
router.get(
    '/:id/answers',
    asyncHandler(async function (req, res) {
        const answers = await Answer.findAll({
            where: {
                questionId: +req.params.id,
            },
        });

        return res.json(answers);
    })
);



module.exports = router;
