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

  const filter = ctx.query.params.length == 2 ? ctx.query.params[1] : '';

  const cardsPerPage = 6;
  const previousPage = page - 1;
  const nextPage = page + 1;

  const wines = await getAllWines();

  const filteredWines = filterWines(wines, filter);

  const totalItems = filteredWines.length;

  const pagination = {
    page,
    cardsPerPage,
    previousPage,
    nextPage,
    totalItems,
    filter,
  };

  return {
    props: { filteredWines, pagination, filter },
  };
};
