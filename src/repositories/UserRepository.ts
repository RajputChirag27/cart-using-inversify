import { injectable } from 'inversify';
import User, { User as UserModel } from '../models/User.model';

@injectable()
export class UserRepository {
    async createUser(name: string, email: string, password: string): Promise<UserModel> {
        return User.create({ name, email, password });
    }
}