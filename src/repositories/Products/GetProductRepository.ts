import { injectable } from "inversify";
import { Product } from "../../interfaces/ProductInterface";
import ProductModel from "../../models/Product.model";

@injectable()
export class GetProductRepository{
    async getProductsByName(name: string): Promise<Product[] | null> {
        return await ProductModel.find({name: name}).exec();
    }

    async getAllProducts(): Promise<Product[] | null> {
        return await ProductModel.find().exec();
    }
}