import express from 'express'
import setupRoutes from './routes/setupRoutes.js';
import 'dotenv/config'
import {join} from 'path'
import mongoConnection from './config/db/mongo.js';

const port = process.env.PORT
const app = express();

app.use(express.json())
mongoConnection();

setupRoutes(app);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening to http://localhost:${process.env.PORT}`)
})