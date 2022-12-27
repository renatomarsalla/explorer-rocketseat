import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}

export { Routes };
