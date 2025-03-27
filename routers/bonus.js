const express = require('express');
const bonus = express.Router();
const foodPosts = require('../food')

//index, shaw all element
bonus.get('/', (req, res) => {
    res.json(foodPosts);
});

//show display element with id
bonus.get('/:slug', (req, res) => {
    requestSlug = req.params.slug
    const resultSearch = foodPosts.find((element) => element.slug === requestSlug);
    res.json(resultSearch);
});

module.exports = bonus;