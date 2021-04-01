import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Career from './Career';

describe('<Career />', () => {
  test('it should mount', () => {
    render(<Career />);
    
    const career = screen.getByTestId('Career');

    expect(career).toBeInTheDocument();
  });
});