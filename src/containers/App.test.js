import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Loading Header', () => {
  render(<App />);
  const h1Element = screen.getByText('Loading');
  expect(h1Element).toBeInTheDocument();
});
