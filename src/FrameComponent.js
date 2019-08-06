import React from 'react';
import ThemeProvider from 'react-jss';

export default ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);