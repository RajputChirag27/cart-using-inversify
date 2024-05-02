// app.ts
import 'reflect-metadata'
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { container } from './inversify.config';
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'


// Import controllers
// import './controllers/SignupService.controller';
// import './controllers/LoginService.controller';
// import './controllers/ProtectedController'

// Set up mongoose connection
import './config/connection'

const app = express();

app.use(bodyParser.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Set up InversifyExpressServer
const server = new InversifyExpressServer(container, null, { rootPath: '/api' }, app);

const appConfigured = server.build();

appConfigured.listen(3000, () => {
    console.log('Server is running on port 3000');
});
