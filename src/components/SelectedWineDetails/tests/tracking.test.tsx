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

describe('Tracking', () => {
  customRender(<SelectedWineDetails selectedWine={selectedWine} />);

  it('should render a tracking', () => {
    const tracking = screen.getByTestId('tracking');
    expect(tracking).toBeInTheDocument();
  });
});
