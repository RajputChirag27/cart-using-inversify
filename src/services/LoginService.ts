// services/LoginService.ts
import { injectable, inject } from 'inversify';
import { UserRepository } from '../repositories/UserRepository';
import { IUser } from '../models/User.model';
import bcrypt from 'bcrypt'

@injectable()
export class LoginService {
    constructor(@inject(UserRepository) private userRepository: UserRepository) { }

    async login(email: string, password: string): Promise<IUser | null> {
        const user = await this.userRepository.findByEmail(email);
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (user && isPasswordValid) {
            return user;
        } else {
            return null;
        }
    }
}
