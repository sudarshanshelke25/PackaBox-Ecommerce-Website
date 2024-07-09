import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';


// Configure ENV
dotenv.config();

// REST OBJECT
const app = express();


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