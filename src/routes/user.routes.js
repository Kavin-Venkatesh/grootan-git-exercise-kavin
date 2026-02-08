import express from 'express';
const router = express.Router();

import { 
    getUser,
    updateUser,
    deleteUser,
    getAllUsers,
    createUser
} from '../controllers/user.controller.js';

router.get('/user/:id', getUser);
router.put('/update-user/:id', updateUser);
router.delete('/delete-user/:id', deleteUser);
router.get('/all-users', getAllUsers);
router.post('/create-user', createUser);

export default router;