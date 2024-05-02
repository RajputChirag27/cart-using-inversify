// inversify.config.ts
import { Container } from 'inversify';
import { UserRepository } from './repositories/UserRepository';
import { SignupService } from './services/SignupService';
import { LoginService } from './services/LoginService';
import { SignupController } from './controllers/SignupService.controller';
import { LoginController } from './controllers/LoginService.controller';
import { ProtectedController } from './controllers/ProtectedController';
import { ProductController } from './controllers/Product/ProductService.controller';
import { GetProductService } from './services/Products/GetProductService';
import { GetProductRepository } from './repositories/Products/GetProductRepository';
import { AddProductRepository } from './repositories/Products/AddProductRepository';
import { AddProductService } from './services/Products/AddProductService';
const container = new Container();

container.bind<UserRepository>(UserRepository).toSelf();
container.bind<SignupService>(SignupService).toSelf();
container.bind<LoginService>(LoginService).toSelf();
container.bind<SignupController>(SignupController).toSelf();
container.bind<LoginController>(LoginController).toSelf();
container.bind<ProtectedController>(ProtectedController).toSelf();
container.bind<ProductController>(ProductController).toSelf();
container.bind<GetProductService>(GetProductService).toSelf();
container.bind<GetProductRepository>(GetProductRepository).toSelf();
container.bind<AddProductService>(AddProductService).toSelf();
container.bind<AddProductRepository>(AddProductRepository).toSelf();

export { container };
