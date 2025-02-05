import { Router } from 'express';
import { param } from 'express-validator';
import { CountryController } from '../controller/CountryController';
import { singleCountry } from '../middleware/singleCountry';
import { handleInputErrors } from '../middleware/validation';

const router = Router();

router.get('/', CountryController.getAllCountries);
router.get(
   '/:countryCode/:countryName',
   [
      param('countryCode', 'country code is required').not().isEmpty(),
      param('countryName', 'country name is required').not().isEmpty(),
      handleInputErrors,
   ],
   singleCountry,
   CountryController.getCountry,
);

export default router;
