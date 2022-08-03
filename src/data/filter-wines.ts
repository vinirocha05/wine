import { Wine } from '../domain/wine';

export const filterWines = (
  wines: Wine[],
  maxPrice?: number,
  minPrice?: number
): Wine[] => {
  const filteredWines = wines.filter((wine) => {
    {
      return wine.price >= minPrice && wine.price <= maxPrice;
    }
  });

  return filteredWines;
};
