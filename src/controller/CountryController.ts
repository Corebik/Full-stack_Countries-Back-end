import type { Request, Response } from 'express';
import { apiNager } from '../config/axios.config';

export class CountryController {
   static getAllCountries = async (req: Request, res: Response) => {
      try {
         const { data } = await apiNager.get('/v3/AvailableCountries');
         res.json(data);
      } catch (error) {
         console.log(error);
         res.status(500).json({ ok: false, msg: 'Error getting Countries' });
      }
   };

   static getCountry = async (req: Request, res: Response) => {
      const countryData = req.country;
      try {
         res.status(200).json(countryData);
      } catch (error) {
         res.status(500).json({ error: 'Error getting Country' });
      }
   };
}
