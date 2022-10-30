const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.json(
        [
            {
                username: 'Cassidy',
                age: 22,
            },
            {
                username: 'Brian',
                age: 24,
            }
        ]
    )
});

module.exports = router;
