import { GetStaticProps } from 'next';
import { getAllWines } from '../data/get-all-wines';
import { Wine } from '../domain/wine';
import Home from '../containers/Home';
import { PaginationData } from '../domain/pagination';

export type WineProps = {
  wines: Wine[];
  pagination: PaginationData;
  filterUrl: string;
};

export default function App({ wines, pagination, filterUrl }: WineProps) {
  return <Home wines={wines} pagination={pagination} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const wines = await getAllWines();
  const totalItems = wines.length;
  const page = 1;
  const cardsPerPage = 6;
  const previousPage = page - 1;
  const nextPage = page + 1;

  const filterUrl = '';

  const pagination = {
    page,
    cardsPerPage,
    previousPage,
    nextPage,
    totalItems,
  };
  return {
    props: { wines, pagination, filterUrl }, // will be passed to the page component as props
  };
};
