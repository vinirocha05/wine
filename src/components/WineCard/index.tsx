import Link from 'next/link';
import { Wine } from '../../domain/wine';

import {
  Card,
  Price,
  PriceContainer,
  PriceMember,
  NonMember,
  Button,
  Container,
} from './styles';

export type WineCardProps = {
  wine: Wine;
};

export default function WineCard({ wine }: WineCardProps) {
  return (
    <Container>
      <Link as={`/products/${wine.id + 1}`} href="/products/[id]">
        <Card>
          <img src={wine.image} alt={wine.name} />
          <h2>{wine.name}</h2>
          <PriceContainer>
            <Price>R$ {wine.price}</Price>
            <span>{wine.discount} % off</span>
          </PriceContainer>

          <PriceMember>
            SÓCIO WINE: <span>R$ {wine.priceMember}</span>
          </PriceMember>
          <NonMember> NÃO SÓCIO: R$ {wine.priceNonMember}</NonMember>
        </Card>
      </Link>
      <Link as={`/products/${wine.id + 1}`} href="/products/[id]">
        <Button>Adicionar</Button>
      </Link>
    </Container>
  );
}
