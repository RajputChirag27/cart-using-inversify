import { Request, Response, NextFunction } from 'express'
import jwt, { VerifyErrors, Secret } from 'jsonwebtoken'
import { RequestHandler } from 'express-serve-static-core'
import { AuthenticatedRequest } from 'src/interfaces/AuthenticationInterface'

// Define a middleware function to authenticate JWT tokens
export const authenticateJwt: RequestHandler = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  // Extract the JWT token from the Authorization header
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const token = authHeader.slice(7) // Remove 'Bearer ' from the token string

  // Verify the JWT token
  jwt.verify(
    token,
    'your-secret-key',
    (err: VerifyErrors | null, decoded: any) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized' })
      }
      // If token is valid, set decoded user data on request object
      req.user = decoded
      next() // Proceed to the next middleware
    },
  )
}
