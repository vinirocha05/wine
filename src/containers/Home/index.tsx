import WineCard from '../../components/WineCard';
import { Wine } from '../../domain/wine';
import { Container } from './styles';

export type HomeProps = {
  wines: Wine[];
};

export default function Home({ wines }: HomeProps) {
  return (
    <Container>
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
    </Container>
  );
}
