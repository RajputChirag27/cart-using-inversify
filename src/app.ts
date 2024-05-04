// app.ts
import 'reflect-metadata'
import express from 'express';
import { InversifyExpressServer, cookies } from 'inversify-express-utils';
import mongoose from 'mongoose';
import { container } from './inversify.config';
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import cookieParser from 'cookie-parser'
import session from 'express-session'

// Import controllers
// import './controllers/SignupService.controller';
// import './controllers/LoginService.controller';
// import './controllers/ProtectedController'

// Set up mongoose connection
// import './config/connection'
import './config/index'

const app = express();
app.use(cookieParser());
app.use(express.json());


app.use(session({
    secret: 'your_secret_key', // Replace with a random secret key
    resave: true,
    saveUninitialized: false
}));


// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Set up InversifyExpressServer
const server = new InversifyExpressServer(container, null, { rootPath: '/api' }, app);

const appConfigured = server.build();

appConfigured.listen(3000, () => {
    console.log('Server is running on port 3000');
});
