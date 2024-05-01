// // repositories/UserRepository.ts
// import { injectable } from 'inversify';
// import { User } from 'src/models/User.model';
// import { Model } from 'mongoose';

// @injectable()
// export class LoginRepository {
//     constructor(private userModel: Model<User>) {}

//     async findByEmail(email: string): Promise<User | null> {
//         return this.userModel.findOne({ email }).exec();
//     }
// }
