const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    phone_number: {
        type: String,
        required: [true, 'phone number is required'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, 
{
    timestamp: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;