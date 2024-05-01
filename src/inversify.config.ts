// inversify.config.ts
import { Container } from 'inversify';
import { UserRepository } from './repositories/UserRepository';
import { SignupService } from './services/SignupService';
import { LoginService } from './services/LoginService';
import { SignupController } from './controllers/SignupService.controller';
import { LoginController } from './controllers/LoginService.controller';
import { ProtectedController } from './controllers/ProtectedController';

const container = new Container();

container.bind<UserRepository>(UserRepository).toSelf();
container.bind<SignupService>(SignupService).toSelf();
container.bind<LoginService>(LoginService).toSelf();
container.bind<SignupController>(SignupController).toSelf();
container.bind<LoginController>(LoginController).toSelf();
container.bind<ProtectedController>(ProtectedController).toSelf();

export { container };
