// inversify.config.ts
import { Container } from 'inversify';
import { UserRepository } from './repositories/UserRepository';
import { UserRepositoryInterface } from './interfaces/UserRepositoryInterface';
import { SignupService } from './services/SignupService';
import  SignupServiceInterface  from './interfaces/SignupService.interface';

const container = new Container();

container.bind<UserRepositoryInterface>('UserRepositoryInterface').to(UserRepository);
container.bind<SignupServiceInterface>('SignupServiceInterface').to(SignupService);
export { container };
