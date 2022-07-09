import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../../redux/countries';
import headerphoto from './assets/headerphoto.png';
import './Countries.css';

export default function Countries() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const [query, setQuery] = useState('');

  return (
    <div>

      <div className="headline">
        <div className="imageContainer">
          <img className="headlinePhoto" src={headerphoto} alt="world" />
        </div>
        <div className="dataContainer">
          <p className="headlineDataNumber">
            {countries.length}
            {' '}

            {' '}
            <br />
            <span className="headlineDataText">
              countries in total
            </span>
          </p>
        </div>
      </div>

      {/* search area */}
      <div className="searchContainer">
        <p className="searchTitle">Search For the Country</p>
        <input className="searchInputArea" placeholder="e.g. Germany" onChange={(event) => setQuery(event.target.value)} />
      </div>
      {/* search area */}

      {/* card mapping, listing countries  */}
      <div className="cardContainer">
        {
      countries.filter((country) => {
        if (query === '') {
          // if query is empty
          return true;
        } if (country.name.toLowerCase().includes(query.toLowerCase())) {
          // returns filtered array
          return true;
        } return false;
      }).map((card) => (
        <div className="countryCard" key={card.name}>
          <Link className="cardLinkContainer" to={`/holidays-worldwide/country/${card.countryCode}`} state={{ country: `${card.name}` }}>
            {' '}
            <p className="arrowForward">➔</p>
            <p className="cardCountryCode">{card.countryCode}</p>
            <div className="cardNameContainer">
              <h2 className="cardCountryName">{card.name}</h2>
              <p className="holidayCounter">4+ holidays in a year</p>
            </div>
          </Link>
        </div>
      ))
}
      </div>
      {/* card mapping, listing countries */}

    </div>
  );
}
