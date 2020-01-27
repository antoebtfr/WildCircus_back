import { UserService } from './../service/user.service';
import { Application, Request, Response } from 'express';

export default (app:Application) => {
    const user = new UserService()

    app.get("/user", (req: Request, res: Response) => {
        res.send(user.getAll())
    })
}