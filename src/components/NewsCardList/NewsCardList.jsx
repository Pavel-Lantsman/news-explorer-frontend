import React from 'react';
import classNames from 'classnames';
import Preloader from '../Preloader/Preloader';
import ResultsError from '../ResultsError/ResultsError';
import NotFound from '../NotFound/NotFound';
import NewsCard from '../NewsCard/NewsCard';
import Button from '../Button/Button';
import './NewsCardList.css';

const NewsCardList = ({
  data,
  savedArticles = {},
  isVisible = true,
  isLoading = false,
  isError = false,
  isSearchResults = false,
  onSignUpClick = () => {},
  onBookmarkClick = () => {},
  onRemoveClick = () => {},
  onLoadMoreClick = undefined,
}) => (
  <section
    className={classNames(
      'news-card-list',
      !isVisible && 'news-card-list_hidden',
    )}
  >
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

      {!isLoading && isError && (
        <ResultsError>
          Sorry, something went wrong during the request.
          There may be a connection issue or the server may be down.
          Please try again later.
        </ResultsError>
      )}

      {!isLoading && !isError && data.length === 0 && (
        <NotFound>
          {
            isSearchResults
              ? 'Sorry, but nothing matched your search terms.'
              : 'You did not save any article yet.'
          }
        </NotFound>
      )}

      {!isLoading && !isError && data.length > 0 && (
        <>
          {isSearchResults && (
            <h2 className="news-card-list__title">
              Search results
            </h2>
          )}

          <ul className="news-card-list__list">
            {data.map((cardData) => (
              <NewsCard
                key={
                  isSearchResults
                    ? cardData.link
                    : cardData._id
                }
                data={cardData}
                savedArticles={savedArticles}
                isSearchResults={isSearchResults}
                onSignUpClick={onSignUpClick}
                onBookmarkClick={onBookmarkClick}
                onRemoveClick={onRemoveClick}
              />
            ))}
          </ul>

          {onLoadMoreClick && (
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
