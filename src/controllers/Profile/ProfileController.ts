import ProfileModel from "../../models/Profile.model";
import { inject } from "inversify";
import { httpGet, httpPost , controller } from "inversify-express-utils";
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import { Profile } from "../../interfaces/ProfileInterface";
import { AuthenticatedRequest} from "../../interfaces/AuthenticationInterface"
import dotenv from 'dotenv';
import { ProfileService } from "../../services/Profiles/ProfileService";
dotenv.config();


@controller('/profile')
export class ProfileController {
    constructor(@inject(ProfileService) private profileService: ProfileService) { }

    @httpPost('/AddProfile')
    async addProfile(req: Request, res: Response) {
        try {
         res.send("This is Profile")
        } catch (error) {
            console.error('Error in login:', error);
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    }
    @httpGet('/GetProfiles')
    async getProfiles(req: Request, res: Response) {
        try {
         res.send("This is GetProfiles")
        } catch (error) {
            console.error('Error in login:', error);
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    }

    @httpPost('/GetProfiles')
    async getProfilesByName(req: Request, res: Response) {
        try {
         res.send("This is Get ProfilesByName")
        } catch (error) {
            console.error('Error in login:', error);
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    }
}







// const getProfile = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
//   try {
//     const profiles: Profile[] | null = await ProfileModel.find({ user_id: req.user.userId });
//     if (!profiles) {
//       res.status(404).json({ message: "Profile not found" });
//       return;
//     }
//     console.log(profiles)
//     res.render('Profile/profile',  {profile : profiles});
//   } catch (err) {
//     console.error(err); 
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };


// const getProfileByName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   try {
//     const profile = await ProfileModel.findById(req.body.profileId);
//     if (!profile) {
//       res.status(404).json({ message: "Profile not found" });
//       return;
//     }
    
//     const jwtPayload = {
//       profileId: profile._id,
//       userId: profile.user_id,
//       profileName: profile.name,
//     };
//     const secretKey: string | undefined = process.env.JWT_SECRET_KEY;
//     if (!secretKey) {
//       console.error("JWT secret key is not defined.");
//       res.status(500).json({ message: "Internal Server Error" });
//       return;
//     }

//     const token = jwt.sign(jwtPayload, secretKey, {
//       expiresIn: "1h", // Token expires in 1 hour
//     });

//     res.cookie('token1', token, { maxAge: 3600000, httpOnly: true }); // Setting maxAge in milliseconds (1 hour)
//     res.redirect('/products/getProducts');
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// export { getProfile, getProfileByName };