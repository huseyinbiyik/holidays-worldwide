import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchCountryDetails } from '../../redux/country';

export default function Country() {
  const countryDetails = useSelector((state) => state.country_details);
  const dispatch = useDispatch();
  console.log(countryDetails);
  const location = useLocation();
  const { id } = location.state;
  useEffect(() => {
    dispatch(fetchCountryDetails(id));
  }, []);

  console.log(id);

  return (
    <div>
      {id}
    </div>
  );
}
