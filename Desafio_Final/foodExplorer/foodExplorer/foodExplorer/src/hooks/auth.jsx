import { createContext, useContext } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider
      value={{ name: 'Renato Marsalla', email: 'renato@email.com' }}
    >
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
