import Header from '../../components/Header';

import { Wine } from '../../domain/wine';
import { MainContainer, LinkContainer, Button } from './styles';
import WineCover from '../../components/WineCover';
import SelectedWineDetails from '../../components/SelectedWineDetails';
import { useRouter } from 'next/router';

export type SelectedWineProps = {
  selectedWine: Wine;
};

export default function SelectedWine({ selectedWine }: SelectedWineProps) {
  const router = useRouter();
  return (
    <>
      <Header />
      <LinkContainer>
        <p onClick={() => router.back()}>{'< Voltar'}</p>
      </LinkContainer>

      <MainContainer>
        <WineCover image={selectedWine.image} name={selectedWine.name} />
        <SelectedWineDetails selectedWine={selectedWine} />
        <Button>Adicionar</Button>
      </MainContainer>
    </>
  );
}
