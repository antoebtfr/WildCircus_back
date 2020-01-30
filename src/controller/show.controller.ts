import { ShowService } from './../service/show.service';
import { Application, Request, Response, Router } from 'express';

export const showController = (app: Application) => {
    const service = new ShowService();
    const router = Router();

    router.get('/', async (req: Request, res: Response) => {
        res.send(await service.get());
    });

    router.post('/', async (req: Request, res: Response) => {
        res.send(await service.post(req.body));
    });

    router.put('/:id', async (req: Request, res: Response) => {
        await service.modifyById(Number(req.params.id), req.body);
        res.send('La modificattion bien été effectuée').status(200);
    })

    router.put('/:id', async (req: Request, res: Response) => {
        await service.deleteById(Number(req.params.id));
        res.send('La suppression a bien été effectuée').status(200);
    })

    app.use('/shows', router)
}