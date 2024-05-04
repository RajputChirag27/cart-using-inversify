// controllers/ProtectedController.ts
import { Request, Response } from 'express';
import { controller, httpGet } from 'inversify-express-utils';
import { authenticateJwt } from '../../middleware/authenticateJwt';
import { AuthenticatedRequest } from 'src/interfaces/AuthenticationInterface';

@controller('/protected')
export class ProtectedController {
    @httpGet('/', authenticateJwt)
    protectedRoute(req: AuthenticatedRequest, res: Response) {
        try{
            res.send('Protected Route');
        } catch(err){
            res.send(err)
        }
    }
}


