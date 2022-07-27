import React from 'react';
import Header from '../Header/Header';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';

const Main = ({
  lastSearch,
  savedArticles,
  shownResults,
  onSearchSubmit,
  onSignInClick,
  onSignUpClick,
  onSignOutClick,
  onBookmarkClick,
  onRemoveClick,
  onLoadMoreClick,
}) => (
  <>
    <Header
      lastSearch={lastSearch}
      onSearchSubmit={onSearchSubmit}
      onSignInClick={onSignInClick}
      onSignOutClick={onSignOutClick}
    />

    <main>
      <NewsCardList
        data={shownResults}
        savedArticles={savedArticles}
        isVisible={lastSearch.query !== undefined}
        isLoading={lastSearch.isLoading}
        isError={lastSearch.isError}
        isSearchResults
        onSignUpClick={onSignUpClick}
        onBookmarkClick={onBookmarkClick}
        onRemoveClick={onRemoveClick}
        onLoadMoreClick={onLoadMoreClick}
      />

      <About />
    </main>

    <Footer />
  </>
);

export default Main;
