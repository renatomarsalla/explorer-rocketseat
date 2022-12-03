import React from 'react';
import ReactDOM from 'react-dom/client';

import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { Home } from './pages/Home/Home';
import { Details } from './pages/Details/Details';

import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import GlobalStyles from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </React.StrictMode>
);
