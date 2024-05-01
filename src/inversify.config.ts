// inversify.config.ts
import { Container } from 'inversify';
import { UserRepository } from './repositories/UserRepository';
import { SignupService } from './services/SignupService';

const container = new Container();

container.bind<UserRepository>('UserRepository').to(UserRepository);
container.bind<SignupService>('SignupService').to(SignupService);

export { container };
