// controllers/SignupController.ts
import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpPost } from 'inversify-express-utils';
import { SignupService } from '../services/SignupService';
import { IUser } from '../interfaces/UserRepositoryInterface';
import bcrypt from 'bcrypt'
@controller('/signup')
export class SignupController {
    constructor(@inject(SignupService) private signupService: SignupService) { }

    @httpPost('/')
    async signup(req: Request, res: Response) {
        try {
            const user: IUser = req.body;
            // Hash password
            const saltRounds = 10;
            const hashedPassword: string = await bcrypt.hash(user.password, saltRounds)
            user.password = hashedPassword;
            const newUser = await this.signupService.signup(user);
            res.status(201).json(newUser);
        } catch (error) {
            console.error('Error in signup:', error);
            res.status(500).json({ error: 'Internal server error', message: error });
        }
    }
}
