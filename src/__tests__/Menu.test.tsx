import { render } from './test-utils';
import '@testing-library/jest-dom';
import Menu from '../pages/Menu';

test('renders Menu component', () => {
  const { getByTestId } = render(<Menu />);
  const menuPage = getByTestId('menu-page');
  expect(menuPage).toBeInTheDocument();
});