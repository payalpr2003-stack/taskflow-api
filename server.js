import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';

import taskRouter from './src/routes/taskRoutes.js';
import { securityHeaders } from './src/middleware/security.js';
import { errorHandler } from './src/middleware/errorMiddleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(securityHeaders);

// Routes
app.use('/api/tasks', taskRouter);

// Home Route
app.get('/', (req, res) => {
  res.send('TaskFlow API Running...');
});

// Error Middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});