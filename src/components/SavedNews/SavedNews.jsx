import React, { useState, useEffect } from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import { savedData } from '../../temp/data';

const SavedNews = ({ onSignOutClick }) => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // TEMPORARY FOR STAGE II
  useEffect(() => {
    setTimeout(() => {
      setNewsData(savedData);
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <SavedNewsHeader
        onSignOutClick={onSignOutClick}
      />

      <main>
        <NewsCardList
          data={newsData}
          isLoading={isLoading}
        />
      </main>

      <Footer />
    </>
  );
};

export default SavedNews;
