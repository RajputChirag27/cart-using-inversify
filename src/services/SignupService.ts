// services/SignupService.ts
import { injectable, inject } from 'inversify'
import { UserRepository } from '../repositories/UserRepository'
import { IUser } from '../interfaces/UserRepositoryInterface'
@injectable()
export class SignupService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  async signup(user: IUser): Promise<IUser> {
    return await this.userRepository.createUser(user)
  }
}
