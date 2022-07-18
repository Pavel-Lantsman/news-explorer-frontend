import React from 'react';
import notFoundImage from '../../images/not-found.svg';
import './NotFound.css';

const NotFound = ({ children }) => (
  <div className="not-found">
    <img src={notFoundImage} alt="Illustration of nothing found" className="not-found__image" />

    <h2 className="not-found__title">
      Nothing found
    </h2>

    <p className="not-found__description">
      {children}
    </p>
  </div>
);

export default NotFound;
