import React, { useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';
import RegSuccessfulPopup from '../RegSuccessfulPopup/RegSuccessfulPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../context/CurrentUserContext';
import { defaultCurrentUser, fakeCurrentUser } from '../../utils/constants';

const App = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(defaultCurrentUser);

  const [isSignInPopupVisible, setIsSignInPopupVisible] = useState(false);
  const [isSignUpPopupVisible, setIsSignUpPopupVisible] = useState(false);
  const [isRegSuccessfulPopupVisible, setIsRegSuccessfulPopupVisible] = useState(false);

  /*
   * ----------------------------------------------------------------
   * Popup Functions
   * ----------------------------------------------------------------
   */

  const closeAllPopups = () => React.startTransition(() => {
    setIsSignInPopupVisible(false);
    setIsSignUpPopupVisible(false);
    setIsRegSuccessfulPopupVisible(false);
  });

  const openSignInPopup = () => React.startTransition(() => {
    closeAllPopups();
    setIsSignInPopupVisible(true);
  });

  const openSignUpPopup = () => React.startTransition(() => {
    closeAllPopups();
    setIsSignUpPopupVisible(true);
  });

  const openRegSuccessfulPopup = () => React.startTransition(() => {
    closeAllPopups();
    setIsRegSuccessfulPopupVisible(true);
  });

  /*
   * ----------------------------------------------------------------
   * Auth Functions
   * ----------------------------------------------------------------
   */

  const handleSignInSubmit = (formValues, onSuccess) => {
    // TEMPORARY FOR STAGE II
    setTimeout(() => {
      setCurrentUser(fakeCurrentUser);
      closeAllPopups();
      onSuccess();
    }, 1500);
  };

  const handleSignUpSubmit = (formValues, onSuccess) => {
    // TEMPORARY FOR STAGE II
    setTimeout(() => {
      closeAllPopups();
      openRegSuccessfulPopup();
      onSuccess();
    }, 1500);
  };

  const handleLogoutClick = () => {
    setCurrentUser(defaultCurrentUser);
    navigate('/');
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/"
          element={(
            <Main
              onSignInClick={openSignInPopup}
              onSignOutClick={handleLogoutClick}
            />
          )}
        />

        <Route
          path="/saved-news"
          element={(
            <ProtectedRoute>
              <SavedNews
                onSignOutClick={handleLogoutClick}
              />
            </ProtectedRoute>
          )}
        />

        <Route
          path="*"
          element={(
            <Navigate to="/" />
          )}
        />
      </Routes>

      <SignInPopup
        isVisible={isSignInPopupVisible}
        closePopup={closeAllPopups}
        onFormSubmit={handleSignInSubmit}
        switchToSignUp={openSignUpPopup}
      />

      <SignUpPopup
        isVisible={isSignUpPopupVisible}
        closePopup={closeAllPopups}
        onFormSubmit={handleSignUpSubmit}
        switchToSignIn={openSignInPopup}
      />

      <RegSuccessfulPopup
        isVisible={isRegSuccessfulPopupVisible}
        closePopup={closeAllPopups}
        switchToSignIn={openSignInPopup}
      />
    </CurrentUserContext.Provider>
  );
};

export default App;
