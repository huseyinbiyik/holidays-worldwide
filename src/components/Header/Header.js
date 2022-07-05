import React from 'react';
import { useSelector } from 'react-redux';
import headerphoto from './assets/headerphoto.png';
import './Header.css';

export default function Header() {
  const countries = useSelector((state) => state.countries);

  return (

    <header>
      <h1> Holidays Worldwide</h1>

      <div className="headline">
        <div className="image-container">
          <img className="headerPhoto" src={headerphoto} alt="world" />
        </div>
        <div className="data">
          <p>
            {countries.length}
            {' '}
            countries
          </p>
        </div>
      </div>
    </header>
  );
}
