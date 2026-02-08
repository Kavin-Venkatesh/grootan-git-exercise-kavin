import express from 'express';
const router = express.Router();

import { 
    getUser,
    updateUser
} from '../controllers/user.controller.js';

router.get('/user/:id', getUser);
router.put('/update-user/:id', updateUser);

export default router;