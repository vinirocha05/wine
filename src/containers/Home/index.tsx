import Header from '../../components/Header';
import WineCard from '../../components/WineCard';
import Filters from '../../components/Filters';

import { Wine } from '../../domain/wine';
import { Container, CardsContainer } from './styles';
import { PaginationData } from '../../domain/pagination';
import Pagination from '../../components/Pagination';

export type HomeProps = {
  wines: Wine[];
  pagination?: PaginationData;
  filter?: string;
};

export default function Home({ wines, pagination, filter }: HomeProps) {
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

  console.log(winesPagination.length);

  return (
    <>
      <Header />
      <Container>
        <Filters />
        <CardsContainer>
          {winesPagination.map((wine) => (
            <WineCard
              key={wine.id}
              name={wine.name}
              discount={wine.discount}
              image={wine.image}
              price={wine.price}
              priceMember={wine.priceMember}
              priceNonMember={wine.priceNonMember}
              id={wine.id + 1}
            />
          ))}
        </CardsContainer>
      </Container>
      <Pagination {...pagination} filter={filter} />
    </>
  );
}
