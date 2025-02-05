import { NextFunction, Request, Response } from 'express';
import { apiCountry, apiNager } from '../config/axios.config';

// Types & Schemas
import { ICountry } from '../schema/Country';
import type { countriesNowRes, flagResponse, populationResponse } from '../types';

declare global {
   namespace Express {
      interface Request {
         country: ICountry;
      }
   }
}

export const singleCountry = async (req: Request, res: Response, next: NextFunction) => {
   const { countryCode, countryName } = req.params;
   
   try {
      //Borders
      const { data: info } = await apiNager.get(`/v3/CountryInfo/${countryCode}`);
      const { borders } = info as { borders: object[] };

      //Population
      const { data } = await apiCountry.get<countriesNowRes<populationResponse>>('/population');
      const populationCounts = data.data;
      const population = populationCounts.find((item) => item.country === countryName);

      //Flag
      const { data: flagRes } = await apiCountry.get<countriesNowRes<flagResponse>>('/flag/images');
      const flag = flagRes.data.find((item) => item.name === countryName);

      req.country = {
         countryName,
         countryCode,
         borders,
         populationCounts: population.populationCounts,
         flag: flag.flag,
      };

      next();
   } catch (error) {
      res.status(404).json({ error: 'Country not found' });
   }
};
