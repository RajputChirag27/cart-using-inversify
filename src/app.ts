// app.ts
import 'reflect-metadata'
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { container } from './inversify.config';

// Import controllers
import './controllers/SignupService.controller';
import './controllers/LoginService.controller';

const app = express();

app.use(bodyParser.json());

// Set up mongoose connection
mongoose.connect('mongodb://localhost:27017/mydb').then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
});

// Set up InversifyExpressServer
const server = new InversifyExpressServer(container, null, { rootPath: '/api' }, app);

const appConfigured = server.build();

appConfigured.listen(3000, () => {
    console.log('Server is running on port 3000');
});
