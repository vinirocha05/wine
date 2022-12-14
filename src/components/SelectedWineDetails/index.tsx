import { Wine } from '../../domain/wine';
import { FaStar } from 'react-icons/fa';
import {
  Heading,
  Infos,
  MemberPrice,
  NonMemberPrice,
  SommelierComments,
  Tracking,
  Container,
  ButtonContainer,
  ButtonController,
} from './styles';
import { useEffect, useState } from 'react';
import { Order } from '../../domain/order';

export type SelectedWineProps = {
  selectedWine: Wine;
};

export default function SelectedWine({ selectedWine }: SelectedWineProps) {
  const ratingStarts = [];

  for (let i = 0; i < selectedWine.rating; i++) {
    ratingStarts.push(i);
  }

  const [quantity, setQuantity] = useState(0);
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(order));
  }, [order]);

  return (
    <Container>
      <Tracking data-testid="tracking">
        <span>
          Vinhos {' > '} {selectedWine.country}
        </span>
        {' > '} {selectedWine.region}
      </Tracking>
      <Heading data-testid="heading">{selectedWine.name}</Heading>
      <Infos data-testid="infos">
        <img
          src={selectedWine.flag}
          alt={`${selectedWine.country}'s flag`}
          data-testid="flag"
        />
        <p data-testid="type">{selectedWine.type} </p>
        <p data-testid="classification">{selectedWine.classification}</p>
        <p data-testid="size"> {selectedWine.size}</p>
        {ratingStarts.map((e) => (
          <FaStar key={e} style={{ color: '#F9B950', marginLeft: '0.5rem' }} />
        ))}
        {selectedWine.avaliations > 0 ? (
          <p>
            {'('} {selectedWine.avaliations} {')'}
          </p>
        ) : (
          ''
        )}
      </Infos>
      <MemberPrice>R$ {selectedWine.priceMember}</MemberPrice>
      <NonMemberPrice>
        NÃO SÓCIO R$ {selectedWine.priceNonMember}
      </NonMemberPrice>
      <SommelierComments>
        <h3>Comentários do Sommelier</h3>
        <p>{selectedWine.sommelierComment}</p>
      </SommelierComments>
      <ButtonContainer>
        <ButtonController data-testid="buttonController">
          <button
            data-testid="addButton"
            onClick={() => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          {quantity}
          <button
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </ButtonController>
        <p
          onClick={() => {
            setOrder({ ...selectedWine, quantity });
          }}
        >
          Adicionar
        </p>
      </ButtonContainer>
    </Container>
  );
}
