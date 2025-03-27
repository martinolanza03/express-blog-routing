const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts');
const bonusRouter = require('./routers/bonus');

//Static asset
app.use(express.static('public'));

//Call routes in posts.js
app.use('/posts', postsRouter);

//Call routes in bonus.js
app.use('/bonus', bonusRouter);

//Server port
app.listen(port, () => {
    console.log(`Server avviato nella porta ${port}`);
});
