import {render, screen} from '@testing-library/react';
import MainPage from './welcom-screen';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/historyRoute/historyRoute';
import {makeOffer} from '../../utils/mocks';
import {cities, SortingValueTypes} from '../../const';

const mockStore = configureMockStore();

const history = createMemoryHistory();

const currentOffers = [{...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}];

const store = mockStore({
  APP: {city: cities[1], sortType: SortingValueTypes.POPULAR},
  OFFERS: {offers: currentOffers}
});

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainPage />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('Cities')).toBeInTheDocument();
  });
});
