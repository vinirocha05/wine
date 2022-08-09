import { screen } from '@testing-library/react';
import Header from '.';
import { customRender } from '../../utils/customRender';

describe('<Header/>', () => {
  customRender(<Header />);
  const header = screen.getByTestId('header');
  const img = screen.getByTestId('img');

  it('should render a Header', () => {
    expect(header).toBeInTheDocument();
    expect(header).toContainElement(img);
  });
});
