// services/LoginService.ts
import { injectable, inject } from 'inversify';

import bcrypt from 'bcrypt'
import { ProfileRepostiory } from '../../repositories/Profiles/ProfileRepository';

@injectable()
export class ProfileService {
    constructor(@inject(ProfileRepostiory) private profileRepository: ProfileRepostiory) { }


}
