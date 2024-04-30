import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpPost } from "inversify-express-utils";
import SignupServiceInterface from "../interfaces/SignupService.interface";
import { SignupService } from "../services/SignupService";

@controller('/signup')
export class SignupController {
    private signupService;
    constructor(@inject('SignupServiceInterface') private signUpService : SignupService){}
    @httpPost('/')
    async signup(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;
        try {
            await this.signupService.signup(name, email, password);
            return res.status(201).json({ message: 'User signed up successfully' });
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}