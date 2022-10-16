const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.json([
        {username: 'Cassidy', age: 22,},
        {username: 'Brian', age: 24,}
    ])
})

module.exports = router;