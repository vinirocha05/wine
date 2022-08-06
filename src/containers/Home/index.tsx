import Header from '../../components/Header';
import WineCard from '../../components/WineCard';
import Filters from '../../components/Filters';

import { Wine } from '../../domain/wine';
import {
  Container,
  CardsContainer,
  ErrorMessage,
  ContentContainer,
} from './styles';
import { PaginationData } from '../../domain/pagination';
import Pagination from '../../components/Pagination';

export type HomeProps = {
  wines: Wine[];
  pagination: PaginationData;
};

export default function Home({ wines, pagination }: HomeProps) {
  const winesPagination = [];

  if (pagination) {
    for (
      let i = (pagination.page - 1) * pagination.cardsPerPage;
      i < pagination.cardsPerPage * pagination.page;
      i++
    ) {
      winesPagination.push(wines[i]);
    }
  } else {
    for (let i = 0; i < 6; i++) {
      winesPagination.push(wines[i]);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Filters />
        <ContentContainer>
          <p>
            <strong>{pagination.totalItems}</strong> produtos encontrados
          </p>
          <CardsContainer>
            {wines.length > 0 ? (
              winesPagination.map((wine) => (
                <WineCard wine={wine} key={wine.id} />
              ))
            ) : (
              <ErrorMessage>
                Ops.. Não encontramos nenhum produtos : {'('}
              </ErrorMessage>
            )}
          </CardsContainer>
        </ContentContainer>
      </Container>
      <Pagination
        nextPage={pagination.nextPage}
        cardsPerPage={pagination.cardsPerPage}
        page={pagination.page}
        previousPage={pagination.previousPage}
        totalItems={pagination.totalItems}
        filter={pagination.filter}
      />
    </>
  );
}
