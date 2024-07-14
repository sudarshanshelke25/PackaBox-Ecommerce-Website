import express from 'express';
import {forgotPasswordController, loginController, signupController, testController} from '../controllers/authController.js'


// Router Object
const router = express.Router();

// Routing For Authentication or User 

// SIGNUP || METHOD POST
router.post('/signup', signupController);

// LOGIN || METHOD POST
router.post('/login', loginController);

// LOGIN || METHOD POST
router.post('/forgot-password', forgotPasswordController);




export default router;