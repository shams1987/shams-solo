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



module.exports = router;
