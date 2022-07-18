import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import CurrentUserContext from '../../context/CurrentUserContext';
import './NewsCard.css';

const NewsCard = ({
  cardData,
  isSearchResults = false,
  onSignInClick = () => {},
  onRemoveClick = () => {},
}) => {
  const currentUser = useContext(CurrentUserContext);

  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => setIsBookmarked(!isBookmarked);

  return (
    <li className="news-card">
      <div className="news-card__container">
        <div className="news-card__image-container">
          <img src={cardData.image} alt={cardData.title} className="news-card__image" />

          {cardData.keyword && (
            <p className="news-card__keyword">
              {cardData.keyword}
            </p>
          )}

          <button
            type="button"
            onClick={
              isSearchResults
                ? currentUser.isLoggedIn
                  ? toggleBookmark
                  : onSignInClick
                : onRemoveClick
            }
            className={classNames(
              'news-card__action-button',
              isSearchResults
                ? isBookmarked
                  ? 'news-card__action-button_type_bookmark-active'
                  : 'news-card__action-button_type_bookmark'
                : 'news-card__action-button_type_trash',
            )}
          >
            <span className="news-card__action-button-text">
              {
                isSearchResults
                  ? currentUser.isLoggedIn
                    ? isBookmarked
                      ? 'Remove from saved'
                      : 'Save article'
                    : 'Sign in to save articles'
                  : 'Remove from saved'
              }
            </span>
          </button>
        </div>

        <a
          href={cardData.link}
          target="_blank"
          rel="noreferrer"
          className="news-card__content-container"
        >
          <p className="news-card__date">
            {cardData.date}
          </p>

          <h3 className="news-card__title">
            {cardData.title}
          </h3>

          <p className="news-card__text">
            {cardData.text}
          </p>

          <p className="news-card__source">
            {cardData.source}
          </p>
        </a>
      </div>
    </li>
  );
};

export default NewsCard;
