// controllers/LoginController.ts
<<<<<<< HEAD:src/controllers/LoginService.controller.ts
import { Request, Response } from 'express'
import { inject } from 'inversify'
import { controller, httpPost } from 'inversify-express-utils'
import { LoginService } from '../services/LoginService'
import { IUser } from '../interfaces/UserRepositoryInterface'
import { sign } from 'jsonwebtoken'
=======
import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpPost } from 'inversify-express-utils';
import { LoginService } from '../../services/LoginService';
import { IUser } from '../../interfaces/UserRepositoryInterface';
import { sign } from 'jsonwebtoken';
>>>>>>> 34c26481177ac940965435da8d58750010be1e28:src/controllers/User/LoginService.controller.ts
import session from 'express-session'

@controller('/login')
export class LoginController {
<<<<<<< HEAD:src/controllers/LoginService.controller.ts
  constructor(@inject(LoginService) private loginService: LoginService) {}
=======

    constructor(@inject(LoginService) private loginService: LoginService) { }
>>>>>>> 34c26481177ac940965435da8d58750010be1e28:src/controllers/User/LoginService.controller.ts

  @httpPost('/')
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const user = await this.loginService.login(email, password)
      const message: string = 'Logged In Successfully'
      if (user) {
        const token = sign({ email }, 'your-secret-key', { expiresIn: '1h' })
        res.status(200).json({ user, message, token })
        return token
      } else {
        res.status(401).json({ error: 'Invalid email or password' })
      }
    } catch (error) {
      console.error('Error in login:', error)
      res.status(500).json({ error: 'Internal server error', message: error })
    }
  }

<<<<<<< HEAD:src/controllers/LoginService.controller.ts
  @httpPost('/generateOTP')
  async generateOTP(req: any, res: any) {
    try {
      const email: string = req.body.email
      const length: number = 6 // Default OTP length is 6 digits
      const otp = await this.loginService.generateOTP(email, length)
      // console.log(otp)
      req.session.user = otp
      res.status(200).json({ otp })
    } catch (error) {
      console.error('Error generating OTP', error)
      res.status(500).json({ error: 'Internal server error', message: error })
=======
    @httpPost('/generateOTP')
    async generateOTP(req: any, res: any) {
        try {
            const email: string = req.body.email;
            const length: number = 6; // Default OTP length is 6 digits
            const otp = await this.loginService.generateOTP(email, length);
            console.log(otp)
            req.session.user = otp;
            req.session.email = email;
            res.status(200).json({ otp });
        } catch (error) {
            console.error('Error generating OTP', error);
            res.status(500).json({ error: 'Internal server error', message: error });
        }
>>>>>>> 34c26481177ac940965435da8d58750010be1e28:src/controllers/User/LoginService.controller.ts
    }
  }

<<<<<<< HEAD:src/controllers/LoginService.controller.ts
  @httpPost('/verifyOTP')
  async verifyOTP(req, res: Response) {
    try {
      const otp: any = req.session.user
      console.log(req.session.user)
      if (otp) {
        const inputOTP: string = req.body.inputOTP
        console.log(inputOTP)
        console.log(otp === inputOTP)
        const isValid = await this.loginService.verifyOTP(otp, inputOTP)

        res.status(200).json({ isValid })
      } else {
        res.send('Otp not found')
      }
    } catch (error) {
      console.error('Error verifying OTP', error)
      res.status(500).json({ error: 'Internal server error', message: error })
=======
    @httpPost('/verifyOTP')
    async verifyOTP(req, res: Response) {
        try {
            const otp: string = req.session.user;
            if (otp) {
                const inputOTP: string = req.body.otp;
                const isValid = await this.loginService.verifyOTP(otp, inputOTP);
                const email = req.session.email
                console.log(email, inputOTP);
                if (isValid) {
                    const message: string = "Logged In Successfully"
                    const user = await this.loginService.findUser(email);
                    if (user) {
                        const token = sign({ email }, 'your-secret-key', { expiresIn: '1h' });
                        res.status(200).json({ user, message, token });
                        return token;
                    } else {
                        res.status(401).json({ error: 'User Not Found' });
                    }
                    req.session.destroy();
                } else {
                    res.status(401).json({ error: 'Invalid Otp' });
                }
            } else {
                res.send("Otp not found");
            }
        } catch (error) {
            console.error('Error verifying OTP', error);
            res.status(500).json({ error: 'Internal server error', message: error });
        }
>>>>>>> 34c26481177ac940965435da8d58750010be1e28:src/controllers/User/LoginService.controller.ts
    }
  }
}