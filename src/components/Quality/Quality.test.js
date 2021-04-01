import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quality from './Quality';

describe('<Quality />', () => {
  test('it should mount', () => {
    render(<Quality />);
    
    const quality = screen.getByTestId('Quality');

    expect(quality).toBeInTheDocument();
  });
});