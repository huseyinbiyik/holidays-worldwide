import apiRoot from './api';

const DISPLAY_COUNTRY_DETAILS = 'holidays-worldwide/countries/DISPLAY_COUNTRY_DETAILS';

export const displayCountryDetails = (data) => ({
  type: DISPLAY_COUNTRY_DETAILS,
  data,
});

export const fetchCountryDetails = () => (dispatch) => {
  fetch(`${apiRoot}AvailableCountries`)
    .then((response) => response.json())
    .then((json) => dispatch(displayCountryDetails(json)));
};

const countryDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_COUNTRY_DETAILS:
      return action.data;
    default:
      return state;
  }
};

export default countryDetailsReducer;
