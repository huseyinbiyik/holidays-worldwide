import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (

    <header>
      <button className="goBackButton" type="submit" onClick={() => navigate(-1)}>˂</button>
      <h1 className="headerTitle"> Holidays Worldwide</h1>
    </header>
  );
}
