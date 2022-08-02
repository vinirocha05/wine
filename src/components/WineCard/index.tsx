import {
  Card,
  Price,
  PriceContainer,
  PriceMember,
  NonMember,
} from './styles';

export type WineCardProps = {
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
};

export default function WineCard({
  image,
  name,
  price,
  discount,
  priceMember,
  priceNonMember,
}: WineCardProps) {
  return (
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
  );
}
