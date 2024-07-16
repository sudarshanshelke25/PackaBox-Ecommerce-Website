import express from 'express';
import { createCategoryController, deleteCategoryController, getAllCategoryController, getCategoryController, updateCategoryController } from '../controllers/categoryController.js';
import formidable from 'express-formidable';


const router = express.Router()

// Create Category || POST Method
router.post('/create-category', formidable(),createCategoryController);

// Get All Category || GET Method
router.get('/getall-category', getAllCategoryController);

// Get One Category || GET Method
router.get('/get-category/:slug', getCategoryController);

// Update Category || PUT Method
router.put('/update-category/:id', updateCategoryController);

// Create Category || DELETE Method
router.delete('/delete-category/:id', deleteCategoryController);


export default router;