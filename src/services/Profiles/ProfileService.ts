// services/LoginService.ts
import { injectable, inject } from 'inversify';

import bcrypt from 'bcrypt'
import { ProfileRepostiory } from '../../repositories/Profiles/ProfileRepository';
import { Profile } from '../../interfaces/ProfileInterface';
import jwt from 'jsonwebtoken';

@injectable()
export class ProfileService {
    constructor(@inject(ProfileRepostiory) private profileRepository: ProfileRepostiory) { }

    async getProfiles(email): Promise<Profile[] | null> {
        const id = await this.profileRepository.getUser(email)
        const profiles = await this.profileRepository.getProfiles(id);
        return profiles;
    }

    async addProfiles(profile, email): Promise<Profile | null> {
        const id = await this.profileRepository.getUser(email)
        profile.user_id = id._id;
        const profiles = await this.profileRepository.createProfile(profile);
        return profiles;
    }

    async getProfileByName(name: string, email : string): Promise<Profile> {
        const id = await this.profileRepository.getUser(email)

        const profile: Profile = await this.profileRepository.getProfileByName(name,id);
        return profile;
    }

    async generateToken(profile: Profile): Promise<string>{
        const token = await this.profileRepository.generateToken(profile);
        return token;
    }


}
