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
};

export default function Home({ wines, pagination }: HomeProps) {
  return (
    <>
      <Header />
      <Container>
        <Filters />
        <CardsContainer>
          {wines.map((wine) => (
            <WineCard
              key={wine.id}
              name={wine.name}
              discount={wine.discount}
              image={wine.image}
              price={wine.price}
              priceMember={wine.priceMember}
              priceNonMember={wine.priceNonMember}
            />
          ))}
        </CardsContainer>
      </Container>
      <Pagination {...pagination} />
    </>
  );
}
