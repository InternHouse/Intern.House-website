const express = require('express');
const app = express();
const users = require('./routes/users');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:8080'
}));

app.use('/api/users', users);


app.get('/api', (req, res) => {
    return res.send('hello world from express!')
})

app.listen(3000);