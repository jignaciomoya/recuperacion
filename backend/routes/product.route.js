const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const productController = require('../controllers/product.controller.js');

router.get('/all', productController.getAllProduct);

router.get('/:id', productController.getProductById);

router.post('/', productController.addById);

router.put('/:id', productController.updateById);

router.delete('/:id', productController.deleteById);

module.exports = router;