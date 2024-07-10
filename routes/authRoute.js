import express from 'express';
import {loginController, signupController} from '../controllers/authController.js'

// Router Object
const router = express.Router();

// Routing For Authentication or User 

// SIGNUP || METHOD POST
router.post('/signup', signupController);

// LOGIN || METHOD POST
router.post('/login', loginController);

export default router;