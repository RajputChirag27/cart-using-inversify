import { inject, injectable } from "inversify";
import { GetProductRepository } from "../../repositories/Products/GetProductRepository";
import { Product } from "../../interfaces/ProductInterface";

@injectable()
export class GetProductService{
    constructor(@inject(GetProductRepository) private getProductRepository : GetProductRepository ){
    }

             
    async getProductByName(product: Product): Promise<Product[] | null> {
        return await this.getProductRepository.getProductsByName(product.name);
    }

    async getAllProducts() : Promise<Product[] | null> {
        return await this.getProductRepository.getAllProducts();
    }

}