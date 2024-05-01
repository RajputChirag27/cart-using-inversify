// controllers/LoginController.ts
import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpPost } from 'inversify-express-utils';
import { LoginService } from '../services/LoginService';
import { IUser } from '../models/User.model';
import { sign } from 'jsonwebtoken';

@controller('/login')
export class LoginController {
    constructor(@inject(LoginService) private loginService: LoginService) { }

    @httpPost('/')
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const user = await this.loginService.login(email, password);
            const message: string = "Logged In Successfully"
            if (user) {
                const token = sign({ email }, 'your-secret-key', { expiresIn: '1h' });
                res.status(200).json({ user, message, token });
                return token;
            } else {
                res.status(401).json({ error: 'Invalid email or password' });
            }
        } catch (error) {
            console.error('Error in login:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
