const express = require('express');
const asyncHandler = require('express-async-handler');
const { Question, User } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async function (req, res) {
        const questions = await Question.findAll({
            include: User
        });
        return res.json(questions);
    })
);



module.exports = router;
