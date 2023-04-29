import {render, screen} from '@testing-library/react';
import Sorting from './SortingOptions';
import HistoryRouter from '../historyRoute/historyRoute';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {SortingValueTypes} from '../../const';
import {configureMockStore} from '@jedmao/redux-mock-store';

const activeSortType = SortingValueTypes.POPULAR;

const history = createMemoryHistory();

const mockStore = configureMockStore();

const store = mockStore({
  sortType: activeSortType,
});

describe('Component: Sorting', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Sorting activeSortType={activeSortType} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });
});
