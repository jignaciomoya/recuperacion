const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller.js');

router.get('/all', productController.getAllProduct);

router.get('/:id', productController.getProductById);

router.post('/', productController.addProduct);

router.put('/:id', productController.updateById);

router.delete('/:id', productController.deleteById);

module.exports = router;
