import express from 'express';
import {loginController, signupController, testController} from '../controllers/authController.js'
import { protectedRoute } from '../middlewares/authMiddleware.js';


// Router Object
const router = express.Router();

// Routing For Authentication or User 

// SIGNUP || METHOD POST
router.post('/signup', signupController);

// LOGIN || METHOD POST
router.post('/login', loginController);

// Protected Routes auth
router.get('/user-auth', protectedRoute, (req, res) => {
    res.status(200).send({ok:true})
});


export default router;