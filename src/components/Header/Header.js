import React from 'react';
import headerphoto from './assets/headerphoto.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <h1> Holidays Worldwide</h1>

      <div className="headline">
        <div className="image-container">
          <img className="headerPhoto" src={headerphoto} alt="world" />
        </div>
        <div className="data"><p>Some data</p></div>
      </div>
    </header>
  );
}
