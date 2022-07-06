import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCountryDetails } from '../../redux/country';
import headerphoto from './assets/headerphoto.png';

export default function Country() {
  const countryDetails = useSelector((state) => state.country_details);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchCountryDetails(id));
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      <div className="headline">
        <div className="image-container">
          <img className="headerPhoto" src={headerphoto} alt="world" />
        </div>
        <div className="data">
          <p>
            {countryDetails.length}
            {' '}
            countries
          </p>
        </div>
      </div>
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
