import express from 'express';
import inventoryRouter from './InventoryRoute.js';
import authRouter from './authRoute.js';
// import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/inventory', inventoryRouter);

export default router;
