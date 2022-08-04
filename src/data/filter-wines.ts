import { Wine } from '../domain/wine';

export const filterWines = (wines: Wine[], filterUrl?: string): Wine[] => {
  let minPrice = 0;
  let maxPrice = 10000;
  if (filterUrl != '') {
    const aux = filterUrl.split('_');
    minPrice = Number(aux[0]);
    maxPrice = Number(aux[1]);
  }
  const filteredWines = wines.filter((wine) => {
    {
      return wine.price >= minPrice && wine.price <= maxPrice;
    }
  });

  return filteredWines;
};
