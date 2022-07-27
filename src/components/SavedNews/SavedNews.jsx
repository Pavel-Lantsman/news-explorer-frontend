import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';

const SavedNews = ({ savedArticles, onSignOutClick, onRemoveClick }) => (
  <>
    <SavedNewsHeader
      savedArticles={savedArticles}
      onSignOutClick={onSignOutClick}
    />

    <main>
      <NewsCardList
        data={savedArticles.data}
        isLoading={savedArticles.isLoading}
        onRemoveClick={onRemoveClick}
      />
    </main>

    <Footer />
  </>
);

export default SavedNews;
