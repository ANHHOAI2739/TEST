import express from 'express';
import inventoryCtrl from '../controllers/inventoryController.js';

const router = express.Router();
router.get('/', inventoryCtrl.getAll);

export default router;
