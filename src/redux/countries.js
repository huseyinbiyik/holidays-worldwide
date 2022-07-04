import apiRoot from './api';

const DISPLAY_COUNTRIES = 'holidays-worldwide/countries/DISPLAY_COUNTRIES';

export const displayCountries = (data) => ({
  type: DISPLAY_COUNTRIES,
  data,
});

export const fetchMissions = () => (dispatch) => {
  fetch(`${apiRoot}/AvailableCountries`)
    .then((response) => response.json())
    .then((json) => dispatch(displayCountries(json)));
};

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_COUNTRIES:
      return action.data;
    default:
      return state;
  }
};

export default countriesReducer;
