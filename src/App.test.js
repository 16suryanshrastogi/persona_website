import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the data engineering portfolio', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /i turn complex data into trusted systems/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /explore my focus/i })).toHaveAttribute('href', '#focus');
  expect(screen.getByRole('heading', { name: /a focused toolbox/i })).toBeInTheDocument();
});
