import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DirectorProfile from './DirectorProfile';

describe('<DirectorProfile />', () => {
  test('it should mount', () => {
    render(<DirectorProfile />);
    
    const directorProfile = screen.getByTestId('DirectorProfile');

    expect(directorProfile).toBeInTheDocument();
  });
});