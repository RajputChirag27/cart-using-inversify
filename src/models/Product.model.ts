import mongoose, {Schema} from "mongoose";
import { Product } from "src/interfaces/ProductInterface";

const ProductSchema : Schema =  new Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true,
    },
    image : {
        type : String
    }
})

export default mongoose.model<Product>('Product', ProductSchema);