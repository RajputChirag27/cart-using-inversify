// controllers/ProtectedController.ts
<<<<<<< HEAD:src/controllers/ProtectedController.ts
import { Request, Response } from 'express'
import { controller, httpGet } from 'inversify-express-utils'
import { authenticateJwt } from '../middleware/authenticateJwt'
import { AuthenticatedRequest } from 'src/interfaces/AuthenticationInterface'
=======
import { Request, Response } from 'express';
import { controller, httpGet } from 'inversify-express-utils';
import { authenticateJwt } from '../../middleware/authenticateJwt';
import { AuthenticatedRequest } from 'src/interfaces/AuthenticationInterface';
>>>>>>> 34c26481177ac940965435da8d58750010be1e28:src/controllers/User/ProtectedController.ts

@controller('/protected')
export class ProtectedController {
  @httpGet('/', authenticateJwt)
  protectedRoute(req: AuthenticatedRequest, res: Response) {
    try {
      res.send('Protected Route')
    } catch (err) {
      res.send(err)
    }
  }
}
