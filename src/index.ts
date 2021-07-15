import 'reflect-metadata';
import {createConnection} from 'typeorm';
import express, {Application} from 'express';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';

import Router from './routes';
import dbConfig from './config/database';

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
    '/docs',
    swaggerUI.serve,
    swaggerUI.setup(undefined, {
        swaggerOptions:{
            url: '/swagger.json'
        }
    })
)

app.use(Router);

createConnection(dbConfig)
    .then((_connection) => {
        app.listen(PORT, ()=>{
            console.log(`server is running on port ${PORT}`);
        })
    })
    .catch((err)=>{
        console.log(`unable to connect to db ${err}`);
        process.exit(1);
    })
