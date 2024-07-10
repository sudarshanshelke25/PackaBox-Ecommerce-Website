import express from 'express';
import {signupController} from '../controllers/authController.js'

// Router Object
const router = express.Router();

// Routing For Authentication or User 

// SIGNUP || METHOD POST
router.post('/signup', signupController);



export default router;