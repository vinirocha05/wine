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

  return (
    <Container>
      {hasPreviousPage && <button>{previousPage}</button>}
      <button>{page}</button>
      {hasNextPage && <button>{nextPage}</button>}
    </Container>
  );
}
