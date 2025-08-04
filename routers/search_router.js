const { Product } = require('../models/product');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    let filter = {};

    // find by name
    if (req.query.name) {
        const search = req.query.name;
        filter.name = { $regex: search, $options: "i" };  //Find by name with case-insensitive
    }

    try {
        const productList = await Product.find(filter).populate('author category');
        res.status(200).send(productList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;