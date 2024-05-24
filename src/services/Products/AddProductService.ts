<<<<<<< HEAD
import { inject, injectable } from 'inversify'
import { AddProductRepository } from '../../repositories/Products/AddProductRepository'
import { Product } from '../../interfaces/ProductInterface'

@injectable()
export class AddProductService {
  constructor(
    @inject(AddProductRepository)
    private addProductRepository: AddProductRepository,
  ) {}

  async addProduct(product: Product): Promise<Product> {
    return await this.addProductRepository.addProducts(product)
  }
}
=======
import { inject, injectable } from "inversify";
import { AddProductRepository } from "../../repositories/Products/AddProductRepository";
import { Product } from "../../interfaces/ProductInterface";
import { ProductTypeInterface } from "src/interfaces/ProductTypeInterface";

@injectable()
export class AddProductService {
    constructor(@inject(AddProductRepository) private addProductRepository: AddProductRepository) { }



    async addProduct(product: Product): Promise<Product> {
        return await this.addProductRepository.addProducts(product);
    }

    async addProductType(productType: ProductTypeInterface): Promise<ProductTypeInterface> {
        return await this.addProductRepository.addProductsType(productType)
    }
}
>>>>>>> 34c26481177ac940965435da8d58750010be1e28
