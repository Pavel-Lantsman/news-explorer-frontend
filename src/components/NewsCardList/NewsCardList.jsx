import React from 'react';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import NewsCard from '../NewsCard/NewsCard';
import Button from '../Button/Button';
import './NewsCardList.css';

const NewsCardList = ({
  data,
  isLoading,
  isSearchResults = false,
  onSignInClick = () => {},
  onLoadMoreClick = () => {},
}) => (
  <section className="news-card-list">
    <div className="news-card-list__container">
      {isLoading && (
        <Preloader>
          {
            isSearchResults
              ? 'Searching for news...'
              : 'Loading your saved articles...'
          }
        </Preloader>
      )}

      {!isLoading && data.length === 0 && (
        <NotFound>
          {
            isSearchResults
              ? 'Sorry, but nothing matched your search terms.'
              : 'You did not save any article yet.'
          }
        </NotFound>
      )}

      {!isLoading && data.length > 0 && (
        <>
          {isSearchResults && (
            <h2 className="news-card-list__title">
              Search results
            </h2>
          )}

          <ul className="news-card-list__list">
            {data.map((cardData) => (
              <NewsCard
                key={cardData.id}
                cardData={cardData}
                isSearchResults={isSearchResults}
                onSignInClick={onSignInClick}
              />
            ))}
          </ul>

          {isSearchResults && (
            <Button
              type="button"
              pattern="secondary"
              onClick={onLoadMoreClick}
              className="news-card-list__button"
            >
              Show more
            </Button>
          )}
        </>
      )}
    </div>
  </section>
);

export default NewsCardList;
