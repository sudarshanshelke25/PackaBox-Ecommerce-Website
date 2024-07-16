import express from 'express';
import { createBrandController, deleteBrandController, getAllBrandController, getBrandController, updateBrandController } from '../controllers/brandController.js';
import formidable from 'express-formidable';

const router = express.Router()

// Create Brand || POST Method
router.post('/create-brand', formidable(), createBrandController);

// Get All Brand || GET Method
router.get('/getall-brand', getAllBrandController);

// Get One Brand || GET Method
router.get('/get-brand/:slug', getBrandController);

// Update Brand || PUT Method
router.put('/update-brand/:id', formidable(), updateBrandController);

// Create Brand || DELETE Method
router.delete('/delete-brand/:id', deleteBrandController);


export default router;