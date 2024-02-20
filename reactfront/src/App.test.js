import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renderiza el logo correctamente', () => {
  render(<App />);
  const logoElement = screen.getByAltText('logo');
  expect(logoElement).toBeInTheDocument();
});

test('navegación a la página de administración', () => {
  render(<App />);
  const linkElement = screen.getByText(/administración/i);
  userEvent.click(linkElement);
  // Verifica que el componente CompShowBlogs se esté mostrando
  expect(screen.getByText(/lista de blogs/i)).toBeInTheDocument();
  // Puedes agregar más verificaciones según la lógica de tu la página de administración
});