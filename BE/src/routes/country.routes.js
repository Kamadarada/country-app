import { Router } from 'express';
import { getAvailableCountries, getCountryInfo } from '../controllers/country.controller.js';

const router = Router();

router.get('/', getAvailableCountries);
router.get('/:code', getCountryInfo);

export default router;
