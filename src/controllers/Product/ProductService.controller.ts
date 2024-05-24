import { Request, Response } from 'express'
import { controller, httpGet, httpPost } from 'inversify-express-utils'
import { authenticateJwt } from '../../middleware/authenticateJwt'
import { inject } from 'inversify'
import { GetProductService } from '../../services/Products/GetProductService'
import { AddProductService } from '../../services/Products/AddProductService'
import { Product } from '../../interfaces/ProductInterface'
import { AuthenticatedRequest } from '../../interfaces/AuthenticationInterface'
import isAdmin from '../../middleware/isAdmin'

@controller('/products')
export class ProductController {
  constructor(
    @inject(GetProductService) private getProductService: GetProductService,
    @inject(AddProductService) private addProductService: AddProductService,
  ) {}
  @httpPost('/getProductsByName')
  async getProductsByName(req: Request, res: Response) {
    try {
      const product: Product = req.body
      const result = await this.getProductService.getProductByName(product)
      console.log(result)
      res.send(result)
    } catch (error) {
      console.error('Error in Fetching Products:', error)
      res.status(500).json({ error: 'Internal server error', message: error })
    }
  }

  @httpGet('/getAllProducts')
  async getAllProducts(req: Request, res: Response) {
    try {
      const result = await this.getProductService.getAllProducts()
      console.log(result)
      res.send(result)
    } catch (error) {
      console.error('Error in Fetching Products:', error)
      res.status(500).json({ error: 'Internal server error', message: error })
    }
  }

  @httpPost('/', authenticateJwt, isAdmin)
  async addProduct(req: AuthenticatedRequest, res: Response) {
    try {
      const product: Product = req.body
      const result = await this.addProductService.addProduct(product)
      console.log(result)
      res.send({ result, message: 'Product Added Successfully' })
    } catch (error) {
      console.error('Error in Adding Product:', error)
      res.status(500).json({ error: 'Internal server error', message: error })
    }
  }
}
