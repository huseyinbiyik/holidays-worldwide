import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { fetchCountryDetails } from '../../redux/country';
import headerphoto from './assets/headerphoto.png';
import './Country.css';

export default function Country() {
  const countryDetails = useSelector((state) => state.country_details);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchCountryDetails(id));
  }, []);
  const location = useLocation();
  const { country } = location.state;

  return (
    <div>
      <div className="headline">
        <div className="imageContainer">
          <img className="headlinePhoto" src={headerphoto} alt="world" />
        </div>
        <div className="dataContainer">
          <p className="headlineDataNumber">
            <h2>
              {country}
            </h2>
            {countryDetails.length}
            {' '}

            {' '}
            <br />
            <span className="headlineDataText">
              holidays in
              a year
            </span>
          </p>
        </div>
      </div>
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
