import React, { useState, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Button from '../Button/Button';

const SignUpPopup = ({
  isVisible,
  closePopup,
  onFormSubmit,
  switchToSignIn,
}) => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event) => setEmailValue(event.target.value);

  const handlePasswordChange = (event) => setPasswordValue(event.target.value);

  const handleUsernameChange = (event) => setUsernameValue(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);
    onFormSubmit({
      email: emailValue,
      password: passwordValue,
      name: usernameValue,
    }, () => setIsLoading(false));
  };

  useEffect(() => {
    setEmailValue('');
    setPasswordValue('');
    setUsernameValue('');
  }, [isVisible]);

  return (
    <PopupWithForm
      isVisible={isVisible}
      closePopup={closePopup}
    >
      <h2 className="popup-with-form__title">
        Sign up
      </h2>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="signup-email" className="popup-with-form__input-group">
          <span className="popup-with-form__input-label">
            Email
          </span>

          <input
            id="signup-email"
            name="email"
            value={emailValue}
            onChange={handleEmailChange}
            className="popup-with-form__input"
            type="text"
            autoComplete="off"
            placeholder="Enter email"
            required
          />

          <span className="popup-with-form__error">
            Input error message
          </span>
        </label>

        <label htmlFor="signup-password" className="popup-with-form__input-group">
          <span className="popup-with-form__input-label">
            Password
          </span>

          <input
            id="signup-password"
            name="password"
            value={passwordValue}
            onChange={handlePasswordChange}
            className="popup-with-form__input"
            type="password"
            autoComplete="off"
            placeholder="Enter password"
            required
          />

          <span className="popup-with-form__error">
            Input error message
          </span>
        </label>

        <label htmlFor="signup-username" className="popup-with-form__input-group">
          <span className="popup-with-form__input-label">
            Username
          </span>

          <input
            id="signup-username"
            name="username"
            value={usernameValue}
            onChange={handleUsernameChange}
            className="popup-with-form__input"
            type="text"
            minLength="2"
            maxLength="30"
            autoComplete="off"
            placeholder="Enter your username"
            required
          />

          <span className="popup-with-form__error">
            Input error message
          </span>
        </label>

        <p className="popup-with-form__error popup-with-form__error_general">
          General error message
        </p>

        <Button
          type="submit"
          pattern="primary"
          className="popup-with-form__submit-button"
          disabled={isLoading}
        >
          {isLoading ? 'Signing up...' : 'Sign up'}
        </Button>

        <p className="popup-with-form__more-options">
          or
          {' '}

          <button
            type="button"
            onClick={switchToSignIn}
            className="popup-with-form__switch-button"
          >
            Sign in
          </button>
        </p>
      </form>
    </PopupWithForm>
  );
};

export default SignUpPopup;
