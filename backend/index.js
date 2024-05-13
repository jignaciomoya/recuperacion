const express = require('express');
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();
const productRouter = require('./routes/product.route.js');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.json());

const URI = "mongodb+srv://joseignaciomoyajim:QcnKYNdX5TTp5mFZ@cluster0.ykdkprv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//route
app.use("/api/product", productRouter);

mongoose.connect(URI)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
        }
    );
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});