import { injectable } from "inversify";
import { Product } from "../../interfaces/ProductInterface";
import ProductModel from "../../models/Product.model";
import { ProductTypeInterface } from "../../interfaces/ProductTypeInterface";
import ProductType from "../../models/ProductType.model";

@injectable()
export class AddProductRepository {
    async addProducts(product: Product): Promise<Product> {
        const result = await ProductModel.findOne({ name: product.name });
        const productType: string = await ProductType.findOne({ name: product.productType });
        if (result || !productType) {
            if (result) {
                throw new Error("Product already exists");
            } else {
                throw new Error("productType not found");
            }
        } else {
            return await ProductModel.create(product);
        }
    }


    async addProductsType(productType: ProductTypeInterface): Promise<ProductTypeInterface> {
        const result = await ProductType.findOne({ name: productType.name });
        if (result) {
            throw new Error("Product already exists");
        } else {
            return await ProductType.create(productType);
        }
    }
}