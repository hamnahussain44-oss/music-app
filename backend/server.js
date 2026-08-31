import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import artistRoutes from './routes/artistRoutes.js';
import songRoutes from './routes/songRoutes.js';
import albumRoutes from './routes/albumRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/artists', artistRoutes);
app.use('/songs', songRoutes);
app.use('/albums', albumRoutes);

app.listen(5001, () => console.log('Server running on port 5001'));