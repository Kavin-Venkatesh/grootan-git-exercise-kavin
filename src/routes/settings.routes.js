import express from 'express';
import { 
    getSettings,
    updateSettings,
    deleteSettings
 } from '../controllers/settings.controller.js';

const router = express.Router();

router.get('/user-settings/:id', getSettings);
router.put('/update-settings/:id', updateSettings);
router.delete('/delete-settings/:id', deleteSettings);

export default router;
