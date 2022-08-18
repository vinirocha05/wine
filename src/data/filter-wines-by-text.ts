import { Wine } from '../domain/wine';

export const filterWinesByText = (
  wines: Wine[],
  filterString?: string
): Wine[] => {
  const filteredWines = wines.filter((wine) => {
    return wine.name.toLowerCase().includes(filterString.toLocaleLowerCase());
  });
  console.log(filterString);

  return filteredWines;
};
