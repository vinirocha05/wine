import Header from '../../components/Header';

import { Wine } from '../../domain/wine';
import { MainContainer, LinkContainer } from './styles';
import SelectedWineDetails from '../../components/SelectedWineDetails';
import { useRouter } from 'next/router';

export type SelectedWineProps = {
  selectedWine: Wine;
};

export default function WineContainer({ selectedWine }: SelectedWineProps) {
  const router = useRouter();
  return (
    <>
      <Header />
      <LinkContainer>
        <p onClick={() => router.back()}>{'< Voltar'}</p>
      </LinkContainer>

      <MainContainer>
        <img src={selectedWine.image} alt={selectedWine.name} />
        <SelectedWineDetails selectedWine={selectedWine} />
      </MainContainer>
    </>
  );
}
