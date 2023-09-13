import express from 'express';
import AuthCtrl from '../controllers/authController.js';

const router = express.Router();

router.post('/login', AuthCtrl.login);

export default router;
