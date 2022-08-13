import { Wine } from '../domain/wine';

export const filterWines = (wines: Wine[], filterUrl?: string): Wine[] => {
  let minPrice = 0;
  let maxPrice = 10000;

  if (filterUrl != '') {
    const aux = filterUrl.split('_');
    minPrice = Number(aux[1]);
    maxPrice = Number(aux[0]);
  }

  const filteredWines = wines.filter((wine) => {
    {
      return wine.priceMember >= minPrice && wine.priceMember <= maxPrice;
    }
  });

  return filteredWines;
};
