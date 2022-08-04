import { GetServerSideProps } from 'next';
import Home from '../../../containers/Home';
import { filterWines } from '../../../data/filter-wines';
import { getAllWines } from '../../../data/get-all-wines';
import { PaginationData } from '../../../domain/pagination';
import { Wine } from '../../../domain/wine';

export type ProductsProps = {
  filteredWines: Wine[];
  pagination: PaginationData;
  filter: string;
};
export default function Products({
  filteredWines,
  pagination,
  filter,
}: ProductsProps) {
  return (
    <div>
      <Home wines={filteredWines} pagination={pagination} filter={filter} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const page = Number(ctx.query.params[0]);
  console.log(ctx.query.params.length);

  let filterUrl = '';

  if (ctx.query.params.length == 2) {
    filterUrl = ctx.query.params[1];
  }

  const cardsPerPage = 6;
  const previousPage = page - 1;
  const nextPage = page + 1;

  // const winesPagination = await getAllWines(
  //   `?page=${page}&limit=${cardsPerPage}`
  // );

  const wines = await getAllWines();

  const filteredWines = filterWines(wines, filterUrl);

  const totalItems = filteredWines.length;

  const pagination = {
    page,
    cardsPerPage,
    previousPage,
    nextPage,
    totalItems,
  };

  return {
    props: { filteredWines, pagination, filterUrl },
  };
};
