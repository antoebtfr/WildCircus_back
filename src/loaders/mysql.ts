import mysql from 'mysql'

export default async () => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: process.env.SQL_user,
        password: process.env.SQL_pass,
        database: "test"
    });

    connection.connect((err)=> {
        if (err) { throw err }
        console.log("Connected!");
    });

}