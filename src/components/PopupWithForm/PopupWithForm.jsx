import React from 'react';
import Popup from '../Popup/Popup';
import './PopupWithForm.css';

const PopupWithForm = ({ children, isVisible, closePopup }) => (
  <Popup
    isVisible={isVisible}
    closePopup={closePopup}
    className="popup-with-form"
  >
    {children}
  </Popup>
);

export default PopupWithForm;
