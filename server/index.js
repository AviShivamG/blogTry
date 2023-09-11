import express, { Router } from 'express';
import dotenv from 'dotenv';


import Connection from './database/db.js';
import router from './routes/route.js';

dotenv.config();

const app = express();


app.use('/' , router);


const PORT = 8000;

app.listen(PORT , () => console.log(`Server is running successfully on PORT Hellloo ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);
