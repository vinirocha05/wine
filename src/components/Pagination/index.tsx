import Link from 'next/link';
import { PaginationData } from '../../domain/pagination';
import { Container } from './styles';

export type PaginationProps = PaginationData & {
  filter: string;
};
export default function Pagination({
  nextPage,
  cardsPerPage,
  page,
  previousPage,
  totalItems,
  filter,
}: PaginationProps) {
  const numberOfPages = Math.ceil(totalItems / cardsPerPage);
  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i + 1);
  }

  console.log(nextPage, previousPage, page, totalItems, filter);

  return (
    <Container>
      {pages.map((page) => {
        return (
          <Link key={page} href={`/products/pages/${page}/${filter}`}>
            {page}
          </Link>
        );
      })}
    </Container>
  );
}
