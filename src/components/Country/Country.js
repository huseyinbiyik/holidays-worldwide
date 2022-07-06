import { v4 as uuidv4 } from 'uuid';
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
      {/* headline for the country detail page */}
      <div className="headline">
        <div className="imageContainer">
          <img className="headlinePhoto" src={headerphoto} alt="world" />
        </div>
        <div className="dataContainer">
          <div className="headlineDataNumber">
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
          </div>
        </div>
      </div>
      {/* headline for the country detail page */}
      <h3 className="holidayBreakdownTitle">
        Holidays in a year for
        {' '}
        <span>
          {' '}
          {country}
        </span>
      </h3>
      {
      countryDetails.map((card) => (
        <div key={uuidv4()} className="holidayBreakdownContainer">
          <div key={uuidv4()} className="holidayBreakdown">
            <p>{card.name}</p>
            <p>
              Date:
              {' '}
              {card.date}
            </p>
            <p>
              {' '}
              Local Name:
              {' '}
              {card.localName}
            </p>

          </div>
        </div>
      ))
    }
    </div>
  );
}
