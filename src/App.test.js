import { render, screen } from '@testing-library/react';
import App from './App';
import SamuraiJSApp from "./App";

test('renders without crashing', () => {
  render(<SamuraiJSApp />);
  const linkElement = document.createElement('div');
  expect(linkElement).toBeInTheDocument();
});
