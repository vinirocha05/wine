import { Wine } from '../domain/wine';

export const filterWines = (wines: Wine[], price: number): Wine[] => {
  const filteredWines = wines.filter((wine) => {
    {
      return wine.price < price;
    }
  });

  return filteredWines;
};
