const express = require('express');
const app = express();
const users = require('./routes/users');

app.use('/api/users', users);
console.log(users);

app.get('/api', (req, res) => {
    return res.send('hello world from express!')
})

app.listen(3000);