// repositories/UserRepository.ts
import { injectable } from 'inversify';
import { IUser } from '../interfaces/UserRepositoryInterface';
import UserModel from '../models/User.model';
import { OTPGenerator } from '../interfaces/OtpInterface';
import otpGenerator from 'otp-generator'
import nodemailer from 'nodemailer'
import { EmailService } from '../interfaces/OtpInterface';


@injectable()
export class UserRepository {
    private transporter;
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: 'csronly4@gmail.com',
                pass: 'wusy stvr igmp jidj' // Use your actual password here
            }
        });
    }
    async createUser(user: IUser): Promise<IUser> {
        return await UserModel.create(user);
    }

    async findByEmail(email: string): Promise<IUser | null> {
        return await UserModel.findOne({ email }).exec();
    }

    async generateOtp(length : number) : Promise<OTPGenerator> {
        return otpGenerator.generate(length);
    }

  

    async sendEmail(email: string, otp: string): Promise<void> {
        try {
            const mailOptions = {
                from: 'csronly4@gmail.com',
                to: email,
                subject: 'Otp from Sasta-Ecommerce',
                text: `This is your otp: ${otp}` // Removed '+' sign before ${otp}
            };

            await this.transporter.sendMail(mailOptions);
            console.log(`Email sent successfully to ${email}`);
        } catch (error) {
            console.error('Error sending email:', error);
            throw new Error('Failed to send email');
        }
    }

}
