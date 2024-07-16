import express from 'express';
import { createBrandController, deleteBrandController, getAllBrandController, getBrandController, updateBrandController } from '../controllers/brandController.js';

const router = express.Router()

// Create Brand || POST Method
router.post('/create-brand', createBrandController);

// Get All Brand || GET Method
router.get('/getall-brand', getAllBrandController);

// Get One Brand || GET Method
router.get('/get-brand/:slug', getBrandController);

// Update Brand || PUT Method
router.put('/update-brand/:id', updateBrandController);

// Create Brand || DELETE Method
router.delete('/delete-brand/:id', deleteBrandController);


export default router;