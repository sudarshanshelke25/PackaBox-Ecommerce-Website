import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/mongoose.js';
import cors from 'cors';

import authRoutes from './routes/authRoute.js';
import sectorRoutes from './routes/sectorRoute.js';
import categoryRoutes from './routes/categoryRoute.js';

// Configure ENV
dotenv.config();

// Configure DATABASE 
connectDB();

// REST OBJECT
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// ROUTES
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/sector', sectorRoutes);
app.use('/api/v1/category', categoryRoutes);
// app.use('/api/v1/category/', categoryRoutes);
// app.use('/api/v1/product/', productRoutes);

// REST API
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to PackABox</h1>`);
});



// PORT FOR NODE SERVER
const PORT = process.env.PORT || 8080;

// RUN OR LISTEN EXPRESS
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});