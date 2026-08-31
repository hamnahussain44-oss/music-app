import express from 'express';
import { getAlbums, addAlbum, deleteAlbum } from '../controllers/albumController.js';

const router = express.Router();
router.get('/', getAlbums);
router.post('/', addAlbum);
router.delete('/:id', deleteAlbum);

export default router;