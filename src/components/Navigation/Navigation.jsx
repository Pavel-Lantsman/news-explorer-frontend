import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Button from '../Button/Button';
import CurrentUserContext from '../../context/CurrentUserContext';
import './Navigation.css';

const Navigation = ({
  onSignInClick = () => {},
  onSignOutClick = () => {},
  isInverted = false,
}) => {
  const containerRef = useRef(null);

  const currentUser = useContext(CurrentUserContext);

  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => setIsVisible(!isVisible);

  const handleSignInClick = () => {
    onSignInClick();
    setIsVisible(false);
  };

  const handleResizeEvent = () => setIsVisible(false);

  const handleClickEvent = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      window.addEventListener('resize', handleResizeEvent);
      document.addEventListener('click', handleClickEvent);
    }

    return () => {
      window.removeEventListener('resize', handleResizeEvent);
      document.removeEventListener('click', handleClickEvent);
    };
  }, [isVisible]);

  return (
    <nav
      className={classNames(
        'navigation',
        isVisible && 'navigation_darken-screen',
        (isInverted || isVisible) && 'navigation_inverted',
      )}
    >
      <div
        className={classNames(
          'navigation__container',
          isVisible && 'navigation__container_filled',
        )}
        ref={containerRef}
      >
        <Link
          to="/"
          className={classNames(
            'navigation__app-name',
            (isInverted || isVisible) && 'navigation__app-name_inverted',
          )}
        >
          NewsExplorer
        </Link>

        <button
          type="button"
          onClick={toggleMenu}
          className={classNames(
            'navigation__menu-button',
            isInverted && 'navigation__menu-button_inverted',
            isVisible && 'navigation__menu-button_active',
          )}
          title="Toggle menu"
          aria-label="Toggle menu"
        />

        <ul
          className={classNames(
            'navigation__menu',
            isVisible && 'navigation__menu_visible',
          )}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => classNames(
                'navigation__menu-link',
                isActive && 'navigation__menu-link_active',
                (isInverted || isVisible) && 'navigation__menu-link_inverted',
              )}
            >
              Home
            </NavLink>
          </li>

          {currentUser.isLoggedIn && (
            <li>
              <NavLink
                to="/saved-news"
                className={({ isActive }) => classNames(
                  'navigation__menu-link',
                  isActive && 'navigation__menu-link_active',
                  (isInverted || isVisible) && 'navigation__menu-link_inverted',
                )}
              >
                Saved articles
              </NavLink>
            </li>
          )}

          <li className="navigation__user-button-container">
            <Button
              type="button"
              pattern={
                (isInverted || isVisible)
                  ? 'outlined-light'
                  : 'outlined-dark'
              }
              onClick={
                !currentUser.isLoggedIn
                  ? handleSignInClick
                  : onSignOutClick
              }
              className={classNames(
                'navigation__user-button',
                !currentUser.isLoggedIn && 'navigation__user-button_wide',
              )}
            >
              {!currentUser.isLoggedIn ? 'Sign in' : (
                <>
                  <span className="navigation__user-button-text">
                    {currentUser.data.name}
                  </span>

                  <span
                    className={classNames(
                      'navigation__user-button-icon',
                      (isInverted || isVisible) && 'navigation__user-button-icon_inverted',
                    )}
                  />
                </>
              )}
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
