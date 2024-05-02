// repositories/UserRepository.ts
import { injectable } from 'inversify';
import { IUser } from '../interfaces/UserRepositoryInterface';
import UserModel from '../models/User.model';

@injectable()
export class UserRepository {
    async createUser(user: IUser): Promise<IUser> {
        return await UserModel.create(user);
    }

    async findByEmail(email: string): Promise<IUser | null> {
        return await UserModel.findOne({ email }).exec();
    }
}
