import { screen, cleanup } from '@testing-library/react';
import SelectedWineDetails from '../';
import { customRender } from '../../../utils/customRender';

const selectedWine = {
  id: 123,
  image: 'string',
  name: 'name',
  price: 123,
  discount: 123,
  priceMember: 123,
  priceNonMember: 123,
  type: 'rose',
  classification: 'seco',
  size: '750ml',
  rating: 4,
  avaliations: 2,
  country: 'Brasil',
  region: 'SP',
  flag: '',
  sommelierComment: 'string',
};

afterEach(() => {
  cleanup();
});

describe('Infos', () => {
  customRender(<SelectedWineDetails selectedWine={selectedWine} />);
  const infos = screen.getByTestId('infos');
  const flag = screen.getByTestId('flag');
  const type = screen.getByTestId('type');
  const size = screen.getByTestId('size');
  const classfication = screen.getByTestId('classification');

  it('should render the wines infos', () => {
    expect(infos).toBeInTheDocument();
    expect(infos).toContainElement(flag);
    expect(infos).toContainElement(type);
    expect(infos).toContainElement(size);
    expect(infos).toContainElement(classfication);
  });
});
