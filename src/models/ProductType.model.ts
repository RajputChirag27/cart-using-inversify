import { Schema } from "mongoose"
import mongoose from "mongoose"
import { ProductTypeInterface } from "src/interfaces/ProductTypeInterface"


const productTypeSchema : Schema = new mongoose.Schema({
name : {
    type : String,
    required : true,
    unique : true
}
}, {timestamps: true})

const ProductType = mongoose.model<ProductTypeInterface>('ProductType', productTypeSchema)

export default ProductType