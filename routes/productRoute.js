import express from 'express';
import formidable from 'express-formidable';
import { createProductController, deleteProductController, getAllProductController, getProductController, updateProductController } from '../controllers/productController.js';

const router = express.Router()

// Create Product || POST Method
router.post('/create-product', formidable(), createProductController);

// Get All Product || GET Method
router.get('/getall-product', getAllProductController);

// Get One Product || GET Method
router.get('/get-product/:slug', getProductController);

// Update Product || PUT Method
router.put('/update-product/:id', formidable(), updateProductController);

// Create Product || DELETE Method
router.delete('/delete-product/:id', deleteProductController);


export default router;