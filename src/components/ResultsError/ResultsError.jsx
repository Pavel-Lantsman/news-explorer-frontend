import React from 'react';
import './ResultsError.css';

const ResultsError = ({ children }) => (
  <div className="results-error">
    <h2 className="results-error__title">
      Error
    </h2>

    <p className="results-error__description">
      {children}
    </p>
  </div>
);

export default ResultsError;
