const express = require('express');
const path = require('path');
const rootDir = require('../util/path')

const router = express.Router();

// prefix is /admin
router.get('/add-products', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-products.html'));
})

router.post('/add-products', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;