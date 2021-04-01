import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Enquiry from './Enquiry';

describe('<Enquiry />', () => {
  test('it should mount', () => {
    render(<Enquiry />);
    
    const enquiry = screen.getByTestId('Enquiry');

    expect(enquiry).toBeInTheDocument();
  });
});