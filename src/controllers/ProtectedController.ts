// controllers/ProtectedController.ts
import { Request, Response } from 'express';
import { controller, httpGet } from 'inversify-express-utils';
import { authenticateJwt } from '../middleware/authenticateJwt';

@controller('/protected')
export class ProtectedController {
    @httpGet('/', authenticateJwt)
    protectedRoute(req: Request, res: Response) {
        res.send('Protected Route');
    }
}


