import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the weather app home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather Station/i);
  expect(linkElement).toBeInTheDocument();
});

test('checks the elements are present in the search page', () => {
  render(<App />);
  const label = screen.getByLabelText(/City Name/i);
  expect(label).toBeInTheDocument();

  const textField = screen.getByTestId(/name/i);
  expect(textField).toBeTruthy();

  const clearButton = screen.getByTestId(/clear/i);
  expect(clearButton).toBeTruthy();

  const showAllButton = screen.getByTestId(/showAll/i);
  expect(showAllButton).toBeTruthy();
});