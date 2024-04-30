// services/SignupService.ts
import { injectable, inject } from 'inversify';
import SignupServiceInterface from '../interfaces/SignupService.interface';
import { UserRepositoryInterface } from '../interfaces/UserRepositoryInterface';
import { User } from '../models/User.model';

@injectable()
export class SignupService implements SignupServiceInterface {
    constructor(@inject('UserRepositoryInterface') private userRepository: UserRepositoryInterface) {}

    async signup(name: string, email: string, password: string): Promise<User> {
        const user = await this.userRepository.createUser(name, email, password);
        return user;
    }
}
