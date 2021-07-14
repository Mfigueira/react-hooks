import React, { useContext } from 'react';

import { Card } from './UI/Card';
import { AuthContext } from '../context/auth-context';
import './Auth.css';

export const Auth = () => {
  const { login } = useContext(AuthContext);

  return (
    <div className="auth">
      <Card>
        <h2>You are not authenticated!</h2>
        <p>Please log in to continue.</p>
        <button onClick={login}>Log In</button>
      </Card>
    </div>
  );
};
