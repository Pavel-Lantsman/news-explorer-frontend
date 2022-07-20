import React, { useState } from 'react';
import Button from '../Button/Button';
import './SearchForm.css';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => setInputValue(event.target.value);

  return (
    <form className="search-form">
      <input
        name="input"
        value={inputValue}
        onChange={handleInputChange}
        className="search-form__input"
        type="text"
        autoComplete="off"
        placeholder="Enter topic"
        required
      />

      <Button
        type="submit"
        pattern="primary"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
