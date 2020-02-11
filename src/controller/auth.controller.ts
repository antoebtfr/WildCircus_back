import { AuthService } from './../service/auth.service';
import express, { Router, Request, Response, Application } from 'express';

export const AuthController = (app: Application) => {

    const AuthRouter: Router = express.Router();
    const authService = new AuthService();

    AuthRouter.post('/signup', async (req: Request, res: Response) => {
        const user = req.body;
        try {
            await authService.signUp(user);
            res.sendStatus(204);
        } catch (error) {
            if (error.message === 'ALREADY_EXIST') {
                res.status(408).send('Informations déjà utilisées');
            } else {
                res.status(409).send('Erreur lors de l\'inscription');
            }
        }
    })

    AuthRouter.get('/confirmation/:token', async (req: Request, res: Response) => {
        const tokenStr = req.params.token;

        try {
            authService.confirmation(tokenStr);
            res.sendStatus(204);
        } catch (error) {
            res.sendStatus(400);
        }
    });

    app.use('/auth', AuthRouter);
}