import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn batata link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn batata/i);
  expect(linkElement).toBeInTheDocument();
});