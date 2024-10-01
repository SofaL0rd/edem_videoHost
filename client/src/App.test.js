import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import  Sidepanel  from './components/Sidepanel';
import  VideoPage  from './page/VideoPage';
import  Header  from './components/Header';

jest.mock('./components/Header', () => ({
  Header: () => <div>Mock Header</div>,
}));

jest.mock('./components/Sidepanel', () => ({
  Sidepanel: () => <div>Mock Sidepanel</div>,
}));

jest.mock('./page/VideoPage', () => ({
  VideoPage: () => <div>Mock VideoPage</div>,
}));

test('renders App component correctly', () => {
  render(<App />);

  expect(screen.getByText('Mock Header')).toBeInTheDocument();
  expect(screen.getByText('Mock Sidepanel')).toBeInTheDocument();
  expect(screen.getByText('Mock VideoPage')).toBeInTheDocument();
});
