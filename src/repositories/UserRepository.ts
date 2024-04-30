// repositories/UserRepository.ts
import { injectable } from 'inversify';
import { UserRepositoryInterface } from '../interfaces/UserRepositoryInterface';
import User, { User as UserModel } from '../models/User.model';

@injectable()
export class UserRepository implements UserRepositoryInterface {
    async createUser(name: string, email: string, password: string): Promise<UserModel> {
        const user = await User.create({ name, email, password });
        return user;
    }
}
