// interfaces/SignupService.interface.ts
import {User} from '../models/User.model';

export default interface SignupServiceInterface {
    signup(name: string, email: string, password: string): Promise<User>;
}
