import { Wine } from '../domain/wine';

export const filterWines = (
  wines: Wine[],
  maxPrice?: number,
  minPrice?: number
): Wine[] => {
  const filteredWines = wines.filter((wine) => {
    {
      return wine.price < maxPrice && wine.price > minPrice;
    }
  });

  return filteredWines;
};
