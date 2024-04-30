// interfaces/UserRepositoryInterface.ts
import { User } from '../models/User.model';

export interface UserRepositoryInterface {
    createUser(name: string, email: string, password: string): Promise<User>;
}
