import { render } from './test-utils';
import '@testing-library/jest-dom';
import ItemsListWrapper from '../components/ItemsListWrapper';

test('renders ItemsListWrapper component', () => {
  const { getByTestId } = render(<ItemsListWrapper openModal={() => {}} />);
  const itemsListWrapper = getByTestId('items-list-wrapper');
  expect(itemsListWrapper).toBeInTheDocument();
});
