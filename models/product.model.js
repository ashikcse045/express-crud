import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
        },
        price: {
            type: Number,
            required: [true, "Product price is required"],
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestame: true,
    },
);

const Product = mongoose.model('Product', productSchema);
export default Product;