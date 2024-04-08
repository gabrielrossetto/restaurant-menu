import { render } from './test-utils';
import '@testing-library/jest-dom';
import CartSectionWrapper from '../components/CartSectionWrapper';

test('renders CartSectionWrapper component', () => {
  const { getByTestId } = render(<CartSectionWrapper />);
  const cartSetionWrapper = getByTestId('cart-section-wrapper');
  expect(cartSetionWrapper).toBeInTheDocument();
});
