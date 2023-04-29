import {render, screen} from '@testing-library/react';
import {makeOffer} from '../../utils/mocks';
import PlaceCard from './OfferCards';
import HistoryRouter from '../historyRoute/historyRoute';
import {createMemoryHistory} from 'history';

const offer = makeOffer();
const history = createMemoryHistory();

describe('Component: PlaceCard', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <PlaceCard offer={offer} newCard="cities"/>
      </HistoryRouter>
    );

    expect(screen.getByText(offer.title)).toBeInTheDocument();
    expect(screen.getByText(offer.typeOfplacement)).toBeInTheDocument();
  });
});
