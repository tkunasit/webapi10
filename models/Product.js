import mongoose from "mongoose";

// 1. create Schema
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 3 },
    unit: String,
    price: { type: Number, default: 10},
    inStock: { type: Boolean, default: true },
},{timestamps: true});

// 2. create Model from Schema
const Product = mongoose.model("Product", ProductSchema);

// 3. export Model from 2.
export default Product;
