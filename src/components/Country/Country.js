import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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

  const params = useParams();

  console.log(params);

  return (
    <div>
      <button type="submit" onClick={() => navigate(-1)}>Back</button>
      {
      countryDetails.map((card) => (
        <div key={card.key}>
          <p key={card.key}>
            Date:
            {card.date}
          </p>
          <p key={card.key}>
            Name:
            {card.name}
          </p>
          <p key={card.key}>
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
