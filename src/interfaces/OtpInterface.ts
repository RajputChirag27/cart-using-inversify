// types.ts
export interface EmailService {
  sendEmail(to: string, subject: string, text: string): Promise<void>
}

export interface OTPGenerator {
  generateOTP(length: number): string
}
