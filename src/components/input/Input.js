import React from 'react';
import './input.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Input({ onKeyPress, onChange, onClick, value }) {
  return (
    <div className="youtube-search">
      <input
        type="text"
        className="youtube-search__input"
        placeholder="Search"
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={value}
      />
      <button className="youtube-search__btn" type="button" onClick={onClick}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default Input;