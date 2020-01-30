import { ShowService } from './../service/show.service';
import { Application, Request, Response, Router } from 'express';

export const showController = (app: Application) => {
    const user = new ShowService();
    const router = Router();

    router.get("/", async (req: Request, res: Response) => {
        res.send(await user.get());
    });

    router.post('/', async (req: Request, res: Response) => {
        res.send(await user.post(req.body));
    })

    app.use('/shows', router)
}