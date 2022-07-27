import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import CurrentUserContext from '../../context/CurrentUserContext';

const ProtectedRoute = ({ children }) => {
  const currentUser = useContext(CurrentUserContext);

  if (currentUser.isLoading || currentUser.isAuthRequired) {
    return null;
  }

  return currentUser.isLoggedIn ? children : (
    <Navigate to="/" state={{ openSignIn: true }} />
  );
};

export default ProtectedRoute;
