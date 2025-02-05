export type countriesNowRes<T> = {
   error: string;
   msg: string;
   data: T[];
};

export type populationResponse = {
   country: string;
   code: string;
   iso3: string;
   populationCounts: object[];
};

export type flagResponse = {
   name: string;
   flag: string;
   iso2: string;
   iso3: string;
};
