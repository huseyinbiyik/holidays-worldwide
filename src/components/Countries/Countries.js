import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../../redux/countries';
import headerphoto from './assets/headerphoto.png';

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
      <input placeholder="Country" onChange={(event) => setQuery(event.target.value)} />
      { countries.filter((country) => {
        if (query === '') {
          // if query is empty
          return true;
        } if (country.name.toLowerCase().includes(query.toLowerCase())) {
          // returns filtered array
          return true;
        } return false;
      }).map((card) => (
        <div key={card.countryCode}>

          <Link to={`/country/${card.countryCode}`} state={{ id: `${card.countryCode}` }}>
            {' '}
            <p>{card.countryCode}</p>
            <h2>{card.name}</h2>

          </Link>
        </div>
      ))}
    </div>
  );
}
