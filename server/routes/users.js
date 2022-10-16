const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {username: 'Cassidy', age: 22,},
        {username: 'Brian', age: 24,}
    ])
})

module.exports = router;