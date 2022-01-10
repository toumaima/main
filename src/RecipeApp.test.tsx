import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipeApp from './RecipeApp';

test('renders learn react link', () => {
  render(<RecipeApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
