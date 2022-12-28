import { useState } from 'react';
import { createContext, useContext } from 'react';

import { api } from '../service/api';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { userExists, token } = response.data;

      //passa o token para o cabecalho de autenticação
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ userExists, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível entrar');
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.userExists }}>
      {children}
    </AuthContext.Provider>
  );
}

// hook
function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
