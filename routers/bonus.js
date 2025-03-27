const express = require('express');
const bonus = express.Router();
const foodPosts = require('../food')

//index, shaw all element
bonus.get('/', (req, res) => {
    res.json(foodPosts);
});

//show display element with id
bonus.get('/:slug', (req, res, next) => {
    const requestSlug = req.params.slug;
    const resultSearch = foodPosts.find((element) => element.slug === requestSlug);

    if (!resultSearch) {
        res.status(404).send(`Nome dello slug sbagliato: ${requestSlug}`);
    }

    res.json(resultSearch);
});

module.exports = bonus;