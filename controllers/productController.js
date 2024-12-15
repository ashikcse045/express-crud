import Product from "../models/product.model.js"

const index = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            status: 'success',
            message: 'Data found',
            data: products,
        })

    } catch(err) {
        console.error("Error:", err.message);
        res.status(500).json({
            status: "error",
            message: "An internal server error occurred",
            details: err.message || "Unknown error",
        });
    }
}

export default {
    index,
}