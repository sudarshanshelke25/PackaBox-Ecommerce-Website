import express from 'express';
import {forgotPasswordController, loginController, signupController } from '../controllers/authController.js'
import { adminRoute, protectedRoute } from '../middlewares/authMiddleware.js';

// Router Object
const router = express.Router();

// Routing For Authentication or User 

// SIGNUP || METHOD POST
router.post('/signup', signupController);

// LOGIN || METHOD POST
router.post('/login', loginController);

// FORGOT PASSWORD || METHOD POST
router.post('/forgot-password', forgotPasswordController);

// Protected Routes user auth
router.get('/user-auth', protectedRoute, (req, res) => {
    res.status(200).send({ok:true})
});

// Protected Routes admin auth
router.get('/admin-auth', protectedRoute, adminRoute, (req, res) => {
    res.status(200).send({ok:true})
});



export default router;