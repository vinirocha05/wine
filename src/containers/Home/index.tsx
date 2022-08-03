import Header from '../../components/Header';
import WineCard from '../../components/WineCard';
import { Wine } from '../../domain/wine';
import { Container, CardsContainer } from './styles';

export type HomeProps = {
  wines: Wine[];
};

export default function Home({ wines }: HomeProps) {
  return (
    <>
      <Header />
      <Container>
        <div>Filters</div>
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
    </>
  );
}
