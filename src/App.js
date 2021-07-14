import React, { useContext } from 'react';
import { Ingredients } from './components/Ingredients/Ingredients';
import { Auth } from './components/Auth';
import { AuthContext } from './context/auth-context';

export const App = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <Ingredients /> : <Auth />;
};
