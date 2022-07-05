import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchCountryDetails } from '../../redux/country';

export default function Country() {
  const countryDetails = useSelector((state) => state.country_details);
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state;
  useEffect(() => {
    dispatch(fetchCountryDetails(id));
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      <button type="submit" onClick={() => navigate(-1)}>Back</button>
      {
      countryDetails.map((card) => (
        <div key={card.localName}>
          <p>
            Date:
            {card.date}
          </p>
          <p>
            Name:
            {card.name}
          </p>
          <p>
            Local Name:
            {card.localName}
          </p>
          <hr />
        </div>
      ))
    }
    </div>
  );
}
