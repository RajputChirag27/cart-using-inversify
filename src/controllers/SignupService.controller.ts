// controllers/SignupService.controller.ts
import { Request, Response } from 'express';
import { controller, httpPost } from 'inversify-express-utils';
import { inject } from 'inversify';
import { SignupService } from '../services/SignupService';
import bcrypt from 'bcrypt'


@controller('/signup')
export class SignupServiceController {
    constructor(@inject('SignupService') private signupService: SignupService) {}

    @httpPost('/')
    async signup(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const saltRounds = 10;
        try {
            const hashedPassword = await bcrypt.hash(password,saltRounds);
            const user = await this.signupService.signup(name, email, hashedPassword);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create user' });
        }
    }
}
