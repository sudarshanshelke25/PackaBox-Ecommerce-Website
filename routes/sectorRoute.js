import express from 'express';
import { createSectorController, deleteSectorController, getAllSectorController, getSectorController, updateSectorController } from '../controllers/sectorController.js';

const router = express.Router()

// Create Sector || POST Method
router.post('/create-sector', createSectorController);

// Get All Sector || GET Method
router.get('/getall-sector', getAllSectorController);

// Get One Sector || GET Method
router.get('/get-sector/:slug', getSectorController);

// Update Sector || PUT Method
router.put('/update-sector/:id', updateSectorController);

// Create Sector || DELETE Method
router.delete('/delete-sector/:id', deleteSectorController);


export default router;