import { UserService } from './../service/user.service';
import { Application, Request, Response, Router } from 'express';

export const userController = (app: Application) => {
    const user = new UserService()
    const router = Router();

    router.get("/", async (req: Request, res: Response) => {
        res.send(await user.get());
    });

    router.post('/', async (req: Request, res: Response) => {
        res.send(await user.post(req.body));
    })

    app.use('/user', router)
}