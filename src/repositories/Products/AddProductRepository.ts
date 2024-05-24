import { injectable } from "inversify";
import { Product } from "../../interfaces/ProductInterface";
import ProductModel from "../../models/Product.model";

@injectable()
export class AddProductRepository{
    async addProducts(product: Product): Promise<Product> {
        const result = await ProductModel.findOne({name: product.name});
        if(result){
            throw new Error("Product already exists");
        } else{
            return await ProductModel.create(product);
        }
    }
}
