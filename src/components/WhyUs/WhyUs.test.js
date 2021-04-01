import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WhyUs from './WhyUs';

describe('<WhyUs />', () => {
  test('it should mount', () => {
    render(<WhyUs />);
    
    const whyUs = screen.getByTestId('WhyUs');

    expect(whyUs).toBeInTheDocument();
  });
});