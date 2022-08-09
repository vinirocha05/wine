import { screen, cleanup } from '@testing-library/react';
import SelectedWineDetails from '..';
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

describe('Button Controller', () => {
  customRender(<SelectedWineDetails selectedWine={selectedWine} />);
  const button = screen.getByTestId('buttonController');

  it('should render a button', () => {
    expect(button).toBeInTheDocument();
  });
});
