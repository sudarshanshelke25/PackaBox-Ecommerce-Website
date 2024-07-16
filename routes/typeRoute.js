import express from 'express';
import { createTypeController, deleteTypeController, getAllTypeController, getTypeController, updateTypeController } from '../controllers/typeController.js';
import formidable from 'express-formidable';

const router = express.Router()

// Create Type || POST Method
router.post('/create-type', formidable(), createTypeController);

// Get All Type || GET Method
router.get('/getall-type', getAllTypeController);

// Get One Type || GET Method
router.get('/get-type/:slug', getTypeController);

// Update Type || PUT Method
router.put('/update-type/:id', formidable(), updateTypeController);

// Create Type || DELETE Method
router.delete('/delete-type/:id', deleteTypeController);


export default router;