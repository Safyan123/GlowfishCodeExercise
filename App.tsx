/**
 * Glowfish App
 */

import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import { Navigation } from './src/navigation';

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}