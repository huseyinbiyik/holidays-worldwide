import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import countriesReducer, { displayCountries } from '../redux/countries';
import countriesTestData from './countriesTestData';
import store from '../redux/configureStore';
import Countries from '../components/Countries/Countries';

describe('Countries test', () => {
  it('should Countries component', () => {
    const countries = render(
      <BrowserRouter>
        <Provider store={store}>
          <Countries />
        </Provider>
      </BrowserRouter>,
    );
    expect(countries).toMatchSnapshot();
  });

  it('should update the state with API data', () => {
    expect(countriesReducer(countriesTestData, displayCountries(countriesTestData)))

      .toEqual(countriesTestData);
  });
});
