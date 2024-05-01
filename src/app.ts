// app.ts
import 'reflect-metadata';
import express from 'express';
import mongoose from 'mongoose';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './inversify.config';
import './controllers/SignupService.controller'; // Import your controllers to register them with InversifyExpressServer


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Create InversifyExpressServer
const server = new InversifyExpressServer(container);

// Configure middleware
server.setConfig((app: express.Application) => {
  app.use(express.json());
});

// // Configure error handling
// server.setErrorConfig((app: express.Application) => {
//   // Add custom error handling middleware here if needed
// });

// Create Express app
const app = server.build();

// Start the server
export const createServer = () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

createServer();

// Export the Express app for testing purposes
export default app;
