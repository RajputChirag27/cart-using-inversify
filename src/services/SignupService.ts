import { injectable, inject } from 'inversify';
import { UserRepository } from '../repositories/UserRepository';
import { User } from '../models/User.model';

@injectable()
export class SignupService {
    constructor(@inject('UserRepository') private userRepository: UserRepository) {}
    async signup(name: string, email: string, password: string): Promise<User> {
        return this.userRepository.createUser(name, email, password);
    }
}