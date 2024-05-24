// services/LoginService.ts
import { injectable, inject } from 'inversify'
import { UserRepository } from '../repositories/UserRepository'
import { IUser } from '../interfaces/UserRepositoryInterface'
import bcrypt from 'bcrypt'

@injectable()
export class LoginService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  async login(email: string, password: string): Promise<IUser | null> {
    const user = await this.userRepository.findByEmail(email)
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (user && isPasswordValid) {
      return user
    } else {
      return null
    }
  }

  async generateOTP(email: string, length: number): Promise<string> {
    const user = await this.userRepository.findByEmail(email)
    if (user) {
      const otp = await this.userRepository.generateOtp(length)
      await this.userRepository.sendEmail(email, otp.toString())
      return otp.toString()
    } else {
      throw new Error('User not Found')
    }
  }

  async verifyOTP(otp: string, inputOTP: string): Promise<boolean> {
    if (otp === inputOTP) {
      return true
    } else {
      return false
    }
<<<<<<< HEAD
  }
=======

    
    async findUser(email: string): Promise<IUser> {
        const user = await this.userRepository.findByEmail(email);
        if (user) {
            return user;
        } else {
            throw new Error("User not Found");
        }
    }
>>>>>>> 34c26481177ac940965435da8d58750010be1e28
}
