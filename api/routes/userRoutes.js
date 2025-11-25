
import express from 'express';
import { createUser, getUsers, deleteUser, loginUser } from './controller/userController.js';

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.delete('/users/:id', deleteUser);
router.post('/login', loginUser);

export default router;


