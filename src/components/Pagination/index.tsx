import Link from 'next/link';
import { PaginationData } from '../../domain/pagination';
import { Container } from './styles';

export type PaginationProps = PaginationData;
export default function Pagination({
  nextPage,
  cardsPerPage,
  page,
  previousPage,
  totalItems,
}: PaginationProps) {
  const hasNextPage = nextPage * cardsPerPage < cardsPerPage + totalItems;
  const hasPreviousPage = previousPage > 1;

  const numberOfPages = Math.ceil(totalItems / cardsPerPage);

  return (
    <Container>
      {hasPreviousPage && (
        <Link
          as={`/products/pages/${previousPage}`}
          href="/products/pages/[params]"
        >
          {previousPage}
        </Link>
      )}
      <Link as={`/products/pages/${page}`} href="/products/pages/[params]">
        {page}
      </Link>
      {hasNextPage && (
        <Link
          as={`/products/pages/${nextPage}`}
          href="/products/pages/[params]"
        >
          {nextPage}
        </Link>
      )}
      {hasNextPage && (
        <Link
          as={`/products/pages/${nextPage + 1}`}
          href="/products/pages/[params]"
        >
          {nextPage + 1}
        </Link>
      )}
    </Container>
  );
}
