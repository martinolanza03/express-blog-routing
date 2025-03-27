const express = require('express');
const bonus = express.Router();
const foodPosts = require('../food')

//index, shaw all element
bonus.get('/', (req, res) => {
    res.json(foodPosts);
});

//show display element with id
bonus.get('/:id', (req, res) => {
    requestId = req.params.id - 1;
    res.json(foodPosts[requestId]);
});

module.exports = bonus;