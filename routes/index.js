const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.json("Welcome to the Character Blog Api").status(200);
});

module.exports = router;