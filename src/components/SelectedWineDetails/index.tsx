import { Wine } from '../../domain/wine';
import {
  Heading,
  Infos,
  MemberPrice,
  NonMemberPrice,
  SommelierComments,
  Tracking,
  Container,
} from './styles';

export type SelectedWineProps = {
  selectedWine: Wine;
};

export default function SelectedWine({ selectedWine }: SelectedWineProps) {
  return (
    <Container>
      <Tracking>
        Vinhos {'>'} {selectedWine.country} {'>'} {selectedWine.region}
      </Tracking>
      <Heading>{selectedWine.name}</Heading>
      <Infos>
        <img src={selectedWine.flag} alt={`${selectedWine.country}'s flag`} />
        <p>{selectedWine.type} </p>
        <p>{selectedWine.classification}</p>
        <p> {selectedWine.size}</p>
        <p>{selectedWine.rating}</p>
      </Infos>
      <MemberPrice>R$ {selectedWine.priceMember}</MemberPrice>
      <NonMemberPrice>
        NÃO SÓCIO R$ {selectedWine.priceNonMember}
      </NonMemberPrice>
      <SommelierComments>
        <h3>Comentários do Sommelier</h3>
        <p>{selectedWine.sommelierComment}</p>
      </SommelierComments>
    </Container>
  );
}
