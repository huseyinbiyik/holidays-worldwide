import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import countryDetailsReducer, { displayCountryDetails } from '../redux/country';
import countryDetailsTestData from './countryDetailsTestData';
import store from '../redux/configureStore';
import Country from '../components/Country/Country';

describe('Country test', () => {
  it('should Country component', () => {
    const country = render(
      <BrowserRouter>
        <Provider store={store}>
          <Country />
        </Provider>
      </BrowserRouter>,
    );
    expect(country).toMatchSnapshot();
  });

  it('should update the state with API data', () => {
    expect(countryDetailsReducer(countryDetailsTestData,
      displayCountryDetails(countryDetailsTestData)))

      .toEqual(countryDetailsTestData);
  });
});
