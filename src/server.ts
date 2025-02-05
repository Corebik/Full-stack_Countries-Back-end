import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import countryRoutes from './routes/countryRoutes';

dotenv.config();

const app = express();

app.use(cors());

//routes
app.use('/api/countries', countryRoutes);

export default app;