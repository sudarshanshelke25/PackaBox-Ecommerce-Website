import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/mongoose.js';


// Configure ENV
dotenv.config();

// Configure DATABASE 
connectDB();

// REST OBJECT
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));


// routes 
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to PackABox</h1>`);
});

// app.use('/api/v1/auth/', authRoutes);
// app.use('/api/v1/category/', categoryRoutes);
// app.use('/api/v1/product/', productRoutes);

// PORT FOR NODE SERVER
const PORT = process.env.PORT || 8080;

// RUN OR LISTEN EXPRESS
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});