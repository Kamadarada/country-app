import { fetchAvailableCountries, fetchCountryInfo } from '../services/country.service.js';

const handleError = (res, message) => {
    res.status(500).json({ error: message });
};

export const getAvailableCountries = async (_, res) => {
    try {
        const countries = await fetchAvailableCountries();
        res.json(countries);
    } catch (error) {
        handleError(res, 'Failed to fetch countries');
    }
};

export const getCountryInfo = async (req, res) => {
    try {
        const { code } = req.params;
        const countryInfo = await fetchCountryInfo(code);
        res.json(countryInfo);
    } catch (error) {
        handleError(res, 'Failed to fetch country info');
    }
};
