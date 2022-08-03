import Header from '../../components/Header';

import { Wine } from '../../domain/wine';
import { MainContainer } from './styles';
import WineCover from '../../components/WineCover';
import SelectedWineDetails from '../../components/SelectedWineDetails';

export type SelectedWineProps = {
  selectedWine: Wine;
};

export default function SelectedWine({ selectedWine }: SelectedWineProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <WineCover image={selectedWine.image} name={selectedWine.name} />
        <SelectedWineDetails selectedWine={selectedWine} />
      </MainContainer>
    </>
  );
}
