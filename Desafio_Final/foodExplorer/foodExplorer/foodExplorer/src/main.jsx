import React from 'react';
import ReactDOM from 'react-dom/client';

import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { Home } from './pages/Home/Home';
import { Details } from './pages/Details/Details';
import { Order } from './pages/Orders/Orders';
import { AddDish } from './pages/AddDish/AddDish';
import { EditDish } from './pages/EditDish/EditDish';
import { MyOrder } from './pages/MyOrder/MyOrder';

import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import GlobalStyles from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyOrder />
    </ThemeProvider>
  </React.StrictMode>
);
