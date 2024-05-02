import { inject, injectable } from "inversify";
import { AddProductRepository } from "../../repositories/Products/AddProductRepository";
import { Product } from "../../interfaces/ProductInterface";

@injectable()
export class AddProductService{
    constructor(@inject(AddProductRepository) private addProductRepository : AddProductRepository ){}

    
            
    async addProduct(product: Product): Promise<Product> {
        return await this.addProductRepository.addProducts(product);
    }
}