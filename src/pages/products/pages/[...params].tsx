import { GetServerSideProps } from 'next';
import Home from '../../../containers/Home';
import { filterWines } from '../../../data/filter-wines';
import { getAllWines } from '../../../data/get-all-wines';
import { PaginationData } from '../../../domain/pagination';
import { Wine } from '../../../domain/wine';

export type ProductsProps = {
  filteredWines: Wine[];
  pagination: PaginationData;
};
export default function Products({ filteredWines, pagination }: ProductsProps) {
  return (
    <div>
      <Home wines={filteredWines} pagination={pagination} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const page = Number(ctx.query.params[0]);
  const filter = ctx.query.params[1].split('_');
  const maxPrice = Number(filter[0]);
  const minPrice = Number(filter[1]);

  const cardsPerPage = 6;
  const previousPage = page - 1;
  const nextPage = page + 1;

  // const winesPagination = await getAllWines(
  //   `?page=${page}&limit=${cardsPerPage}`
  // );

  const wines = await getAllWines();

  const filteredWines = filterWines(wines, maxPrice, minPrice);

  const totalItems = filteredWines.length;

  const pagination = {
    page,
    cardsPerPage,
    previousPage,
    nextPage,
    totalItems,
  };

  return {
    props: { filteredWines, pagination },
  };
};
