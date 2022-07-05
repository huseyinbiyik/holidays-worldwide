import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../../redux/countries';

export default function Countries() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <div>
      {
      countries.map((card) => (
        <div key={card.countryCode}>

          <Link to={`/country/${card.countryCode}`} state={{ id: `${card.countryCode}` }}>
            {' '}
            <p>{card.countryCode}</p>
            <h2>{card.name}</h2>

          </Link>
        </div>
      ))
    }
    </div>
  );
}
