import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpPost } from "inversify-express-utils";
import SignupServiceInterface from "../interfaces/SignupService.interface";
import { SignupService } from "../services/SignupService";
import bcrypt from 'bcrypt'

@controller('/signup')
export class SignupController {
    private signupService;
    constructor(@inject('SignupServiceInterface') signUpService : SignupService){
        this.signupService = signUpService;
    }
    @httpPost('/')
    async signup(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;
        // console.log(name)
        // console.log(email)
        // console.log(password)
        // console.log(this.signupService)
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            // console.log(hashedPassword)
            await this.signupService.signup(name, email, hashedPassword);
            return res.status(201).json({ message: 'User signed up successfully' });
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}