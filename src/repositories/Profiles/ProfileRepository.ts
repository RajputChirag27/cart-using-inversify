// repositories/UserRepository.ts
import { injectable } from 'inversify';
import { Profile } from '../../interfaces/ProfileInterface';
import ProfileModel from '../../models/Profile.model';
import UserModel from '../../models/User.model';
import {IUser} from '../../interfaces/UserRepositoryInterface'
import jwt from 'jsonwebtoken'


@injectable()
export class ProfileRepostiory {
    async getUser(email): Promise<IUser> {
        return await UserModel.findOne({ email : email }).exec();
    }

    async getProfiles(id): Promise<Profile[]> {
        return await ProfileModel.find({ user_id: id._id }).exec();
    }

    async createProfile(profile: Profile): Promise<Profile> {
        return await ProfileModel.create(profile);
    }

    async getProfileByName(name : string, id) : Promise<Profile> {
        return await ProfileModel.findOne({ name: name, user_id: id._id}).exec();
    }

    async generateToken(profile : Profile) : Promise<string>{
        const token : string = jwt.sign({ profile }, 'secret_key', { expiresIn: '1h' });
        return token;
    }
}
