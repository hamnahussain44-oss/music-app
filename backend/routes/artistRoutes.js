import express from 'express';
import { getArtists, addArtist, deleteArtist } from '../controllers/artistController.js';

const router = express.Router();
router.get('/', getArtists);
router.post('/', addArtist);
router.delete('/:id', deleteArtist);

export default router;