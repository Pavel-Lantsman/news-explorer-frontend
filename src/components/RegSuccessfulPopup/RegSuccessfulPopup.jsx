import React from 'react';
import Popup from '../Popup/Popup';
import './RegSuccessfulPopup.css';

const RegSuccessfulPopup = ({ isVisible, closePopup, switchToSignIn }) => (
  <Popup
    isVisible={isVisible}
    closePopup={closePopup}
    className="reg-successful-popup"
  >
    <h2 className="reg-successful-popup__title">
      Registration successfully completed!
    </h2>

    <button
      type="button"
      onClick={switchToSignIn}
      className="reg-successful-popup__switch-button"
    >
      Sign in
    </button>
  </Popup>
);

export default RegSuccessfulPopup;
