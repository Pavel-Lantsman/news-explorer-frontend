import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';
import { searchData } from '../../temp/data';

const Main = ({ onSignInClick, onSignOutClick }) => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // TEMPORARY FOR STAGE II
  useEffect(() => {
    setTimeout(() => {
      setNewsData(searchData);
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <Header
        onSignInClick={onSignInClick}
        onSignOutClick={onSignOutClick}
      />

      <main>
        <NewsCardList
          data={newsData}
          isLoading={isLoading}
          isSearchResults
          onSignInClick={onSignInClick}
          onLoadMoreClick={() => {}}
        />

        <About />
      </main>

      <Footer />
    </>
  );
};

export default Main;
