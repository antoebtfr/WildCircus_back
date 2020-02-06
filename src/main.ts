import { AuthController } from './controller/auth.controller';
import { showController } from './controller/show.controller';
import express from 'express';
import loaders from './loaders';
import 'reflect-metadata';
import { userController } from './controller/user.controller';

async function startServer() {
    const app = express();
    const port = 3000;

    await loaders(app);
    await userController(app);
    await showController(app);
    await AuthController(app);

    app.listen(port, (err) => {
        if (err) {
            console.log('Something bad happened...');
        } else {
            console.log('Listening on port : ' + port);
        }
    })
}

startServer();