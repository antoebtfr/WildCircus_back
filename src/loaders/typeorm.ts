import { Token } from './../entity/token.entity';
import { Show } from './../entity/show.entity';
import { User } from '../entity/user.entity';
import { createConnection } from 'typeorm';

export default async () => {
    await createConnection({
        type: 'mysql',
        host: 'localhost',
        username: process.env.SQL_user,
        password: process.env.SQL_pass,
        database: 'wildcircus',
        entities: [
            User,
            Show,
            Token
        ],
        synchronize: true,
        logging: false
    }).then(connection => {

        // here you can start to work with your entities
    }).catch(error => console.log(error));
}