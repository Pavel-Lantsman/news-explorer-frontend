import React, { useContext } from 'react';
import Navigation from '../Navigation/Navigation';
import CurrentUserContext from '../../context/CurrentUserContext';
import { generateKeywordsList } from '../../utils/helpers';
import './SavedNewsHeader.css';

const SavedNewsHeader = ({ savedArticles, onSignOutClick }) => {
  const currentUser = useContext(CurrentUserContext);

  const keywordsList = generateKeywordsList(savedArticles.data);
  const keywordsAmount = keywordsList.length;

  const renderKeywords = () => {
    if (keywordsAmount === 0) return 'None';
    if (keywordsAmount === 1) return keywordsList[0];

    if (keywordsAmount < 4) {
      return `${
        keywordsList.slice(0, -1).join(', ')
      } and ${
        keywordsList[keywordsAmount - 1]
      }`;
    }

    return `${keywordsList.slice(0, 2).join(', ')} and ${keywordsAmount - 2} more`;
  };

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
          , you have
          {` ${savedArticles.data.length} `}
          saved articles
        </h2>

        <p className="saved-news-header__description">
          By keywords:
          {' '}

          <span className="saved-news-header__keywords">
            {renderKeywords()}
          </span>
        </p>
      </div>
    </header>
  );
};

export default SavedNewsHeader;
