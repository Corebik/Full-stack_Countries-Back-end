import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiNager = axios.create({
   baseURL: process.env.API_NAGER_URL,
   headers: {
      'Content-Type': 'application/json',
   },
});

const apiCountry = axios.create({
   baseURL: process.env.API_COUNTRYSNOW_URL,
   headers: {
      'Content-Type': 'application/json',
   },
});

export { apiCountry, apiNager };
