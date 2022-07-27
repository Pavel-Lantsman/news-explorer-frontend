import React, { useState, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Button from '../Button/Button';
import useForm from '../../hooks/form';

const SignUpPopup = ({
  isVisible,
  closePopup,
  onFormSubmit,
  switchToSignIn,
}) => {
  const {
    formValues,
    formErrors,
    isFormValid,
    handleInputChange,
    resetForm,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [errorResponse, setErrorResponse] = useState(undefined);

  const handleErrorResponse = (error) => {
    if (error.validation) {
      return setErrorResponse(error.validation.body.message);
    }

    return setErrorResponse(error.message);
  };

  const handleAnyResponse = () => setIsLoading(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);
    onFormSubmit(
      {
        email: formValues.email,
        password: formValues.password,
        name: formValues.username,
      },
      handleErrorResponse,
      handleAnyResponse,
    );
  };

  useEffect(() => {
    resetForm();
    setErrorResponse(undefined);
  }, [isVisible]);

  return (
    <PopupWithForm
      isVisible={isVisible}
      closePopup={closePopup}
    >
      <h2 className="popup-with-form__title">
        Sign up
      </h2>

      <form
        name="signup-form"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <label htmlFor="signup-email" className="popup-with-form__input-group">
          <span className="popup-with-form__input-label">
            Email
          </span>

          <input
            id="signup-email"
            name="email"
            value={formValues.email || ''}
            onChange={handleInputChange}
            className="popup-with-form__input"
            type="email"
            autoComplete="off"
            placeholder="Enter email"
            required
            disabled={isLoading}
          />

          {formErrors.email && (
            <p className="popup-with-form__error">
              {formErrors.email}
            </p>
          )}
        </label>

        <label htmlFor="signup-password" className="popup-with-form__input-group">
          <span className="popup-with-form__input-label">
            Password
          </span>

          <input
            id="signup-password"
            name="password"
            value={formValues.password || ''}
            onChange={handleInputChange}
            className="popup-with-form__input"
            type="password"
            minLength="8"
            autoComplete="off"
            placeholder="Enter password"
            required
            disabled={isLoading}
          />

          {formErrors.password && (
            <p className="popup-with-form__error">
              {formErrors.password}
            </p>
          )}
        </label>

        <label htmlFor="signup-username" className="popup-with-form__input-group">
          <span className="popup-with-form__input-label">
            Username
          </span>

          <input
            id="signup-username"
            name="username"
            value={formValues.username || ''}
            onChange={handleInputChange}
            className="popup-with-form__input"
            type="text"
            minLength="2"
            maxLength="30"
            autoComplete="off"
            placeholder="Enter your username"
            required
            disabled={isLoading}
          />

          {formErrors.username && (
            <p className="popup-with-form__error">
              {formErrors.username}
            </p>
          )}
        </label>

        {errorResponse && (
          <p className="popup-with-form__error popup-with-form__error_general">
            {errorResponse}
          </p>
        )}

        <Button
          type="submit"
          pattern="primary"
          className="popup-with-form__submit-button"
          disabled={isLoading || !isFormValid}
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
