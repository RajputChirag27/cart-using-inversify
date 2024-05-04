// inversify.config.ts
import { Container } from 'inversify';
import * as controllers from  './controllers/index';
import { UserRepository } from './repositories/UserRepository';
import { SignupService } from './services/SignupService';
import { LoginService } from './services/LoginService';
import { SignupController } from './controllers/User/SignupService.controller';
import { LoginController } from './controllers/User/LoginService.controller';
import { ProtectedController } from './controllers/User/ProtectedController';
import { ProductController } from './controllers/Product/ProductService.controller';
import { GetProductService } from './services/Products/GetProductService';
import { GetProductRepository } from './repositories/Products/GetProductRepository';
import { AddProductRepository } from './repositories/Products/AddProductRepository';
import { AddProductService } from './services/Products/AddProductService';
import { ProfileRepostiory } from './repositories/Profiles/ProfileRepository';
import { ProfileService } from './services/Profiles/ProfileService';
import { ProfileController } from './controllers/Profile/ProfileController';
const container = new Container();

// Controllers Binding
// User
container.bind<controllers.LoginController>(controllers.LoginController).toSelf();
container.bind<controllers.SignupController>(controllers.SignupController).toSelf();
container.bind<controllers.ProtectedController>(controllers.ProtectedController).toSelf();

// Product
container.bind<controllers.ProductController>(controllers.ProductController).toSelf();

// Profile
container.bind<controllers.ProfileController>(controllers.ProfileController).toSelf();



// Services Binding



// Repositories Binding


//MiddleWares Binding





container.bind<UserRepository>(UserRepository).toSelf();
container.bind<SignupService>(SignupService).toSelf();
container.bind<LoginService>(LoginService).toSelf();
// container.bind<SignupController>(SignupController).toSelf();
// container.bind<LoginController>(LoginController).toSelf();
// container.bind<ProtectedController>(ProtectedController).toSelf();
// container.bind<ProductController>(ProductController).toSelf();
container.bind<GetProductService>(GetProductService).toSelf();
container.bind<GetProductRepository>(GetProductRepository).toSelf();
container.bind<AddProductService>(AddProductService).toSelf();
container.bind<AddProductRepository>(AddProductRepository).toSelf();
container.bind<ProfileRepostiory>(ProfileRepostiory).toSelf();
// container.bind<ProfileController>(ProfileController).toSelf();
container.bind<ProfileService>(ProfileService).toSelf();

export { container };
