import Link from 'next/link';

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
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
  id: number;
};

export default function WineCard({
  image,
  name,
  price,
  discount,
  priceMember,
  priceNonMember,
  id,
}: WineCardProps) {
  return (
    <Container>
      <Link as={`/products/${id}`} href="/products/[id]">
        <Card>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <PriceContainer>
            <Price>R$ {price}</Price>
            <span>{discount} % off</span>
          </PriceContainer>

          <PriceMember>
            SÓCIO WINE: <span>R$ {priceMember}</span>
          </PriceMember>
          <NonMember> NÃO SÓCIO: R$ {priceNonMember}</NonMember>
        </Card>
      </Link>
      <Button>Adicionar</Button>
    </Container>
  );
}
