import express from 'express';
import { saveDataIntoDB } from '../controllers/dbController';

const router = express.Router();

router.get(`/`, saveDataIntoDB);

export default router;