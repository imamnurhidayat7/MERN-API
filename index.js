const express = require('express');

const app = express();

app.use(() => {
    console.log('hello');
    console.log('are you there?');
    console.log('answer me!!!');
})

app.listen(4000);