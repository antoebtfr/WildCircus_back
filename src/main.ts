import express from 'express';
import loaders from './loaders';
import userController from './controller/user.controller';

function startServer() {
    const app = express();
    const port = 3000;
    
    loaders(app);
    userController(app);

    app.listen(port, (err) => {
        if (err) {
            console.log("Something bad happened...");
        } else {
            console.log("Listening on port : " + port);
        }
    })
}

startServer();