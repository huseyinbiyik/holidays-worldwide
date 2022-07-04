import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
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
          <p>{card.countryCode}</p>
          <h2>{card.name}</h2>
        </div>
      ))
    }
    </div>
  );
}
