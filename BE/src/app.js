import express from 'express';
import cors from 'cors';
import countryRoutes from './routes/country.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/countries', countryRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

export default app; 