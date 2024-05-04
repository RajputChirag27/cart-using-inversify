import mongoose, { Schema } from "mongoose";
import { Product } from "src/interfaces/ProductInterface";
import ProductType from "./ProductType.model";

const ProductSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String
    },
    productType: {
        type: String,
        ref: 'ProductType',
        required: true
    }
})

export default mongoose.model<Product>('Product', ProductSchema);