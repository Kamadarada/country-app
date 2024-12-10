import axios from 'axios';

const baseURLNager = process.env.NAGER_API_BASE_URL;
const baseURLCountriesNow = process.env.COUNTRIES_NOW_API_BASE_URL;

export const fetchAvailableCountries = async () => {
    const response = await axios.get(`${baseURLNager}/AvailableCountries`);
    return response.data;
};

export const fetchCountryInfo = async (code) => {
    const countryInfoResponse = await axios.get(`${baseURLNager}/CountryInfo/${code}`);
    const countryName = countryInfoResponse.data.commonName || countryInfoResponse.data.officialName;

    if (!countryName) {
        throw new Error('Country name not found in the response');
    }

    const [populationResponse, flagResponse] = await Promise.all([
        axios.post(`${baseURLCountriesNow}/countries/population`, {
            country: countryName,
        }),
        axios.post(`${baseURLCountriesNow}/countries/flag/images`, {
            country: countryName,
        }),
    ]);

    return {
        borders: countryInfoResponse.data.borders?.map((border) => border.commonName) || [],
        population: populationResponse.data.data.populationCounts || [],
        flag: flagResponse.data.data.flag || '',
    };
};
