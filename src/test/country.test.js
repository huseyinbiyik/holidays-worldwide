import countryDetailsReducer, { displayCountryDetails } from '../redux/country';
import countryDetailsTestData from './countryDetailsTestData';

describe('Country test', () => {
  it('should update the state with API data', () => {
    expect(countryDetailsReducer(countryDetailsTestData,
      displayCountryDetails(countryDetailsTestData)))

      .toEqual(countryDetailsTestData);
  });
});
