const Product = require('../models/product.model');

const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find({
            isDeleted: false,
        });
        console.log(products);
        res.status(200).json(products);
    } catch (err) {
        console.log(err);
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (err) {
        console.log(err);
    }
};

const addProduct = async (req, res) => {
    console.log({body: req});
    
    try {
        const createdProduct = await Product.create(req.body);
        res.status(200).json(createdProduct);
    }	catch (err) {
        console.log({body: req.body, err: err.message});
    }
};

const updateById = async (req, res) => {
    try {
        const { id } = req.params;
        
        //returns the old product.
        const oldProduct = await Product.findByIdAndUpdate(
            id,
            req.body,
        );
        if (!oldProduct) {
            res.status(404).json({ message: 'Product not found' });
        }

        //so I need to find it against
        const updatedProduct = await Product.findById(id);

        res.status(200).json(updatedProduct);
    } catch (err) {
        console.log(err);
    }
};

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(
            id,
            { isDeleted: true },
        );
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted' });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllProduct,
    getProductById,
    addProduct,
    updateById,
    deleteById
};