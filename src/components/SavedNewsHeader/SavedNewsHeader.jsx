import React, { useContext } from 'react';
import Navigation from '../Navigation/Navigation';
import CurrentUserContext from '../../context/CurrentUserContext';
import './SavedNewsHeader.css';

const SavedNewsHeader = ({ onSignOutClick }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="saved-news-header">
      <Navigation
        onSignOutClick={onSignOutClick}
      />

      <div className="saved-news-header__container">
        <h1 className="saved-news-header__title">
          Saved articles
        </h1>

        <h2 className="saved-news-header__subtitle">
          {currentUser.data.name}
          , you have 5 saved articles
        </h2>

        <p className="saved-news-header__description">
          By keywords:
          {' '}

          <span className="saved-news-header__keywords">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
    </header>
  );
};

export default SavedNewsHeader;
