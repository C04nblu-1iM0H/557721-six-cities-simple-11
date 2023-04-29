import {useAppSelector} from '../../hooks/index';
import { useState } from 'react';
import { OfferType } from '../../types/offer';
import OfferCards from '../../components/OfferCards/OfferCards';
import NotFoundOffers from '../notFoundOffers/notFoundOffers';
import Map from '../map/map';
import SortingOptions from '../SortingOptions/SortingOptions';
import {getOffersToRender} from '../../store/offers-data/selectors';
import {getCity, getSortTypes} from '../../store/app-process/selectors';


function ListCards(): JSX.Element {
  const currentCity = useAppSelector(getCity);
  const [activeCard, setActiveCard] = useState<OfferType | undefined>(undefined);
  const activeSortType = useAppSelector(getSortTypes);
  const offers = useAppSelector(getOffersToRender);

  if(offers.length === 0){
    return <NotFoundOffers currentCity={currentCity.name}/>;
  }

  const handleActiveCard = (card: OfferType):void => {
    setActiveCard(card);
  };
  return(
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
          <SortingOptions activeSortType={activeSortType}/>
          <div className="cities__places-list places__list tabs__content">{
            offers.map((offer) => (
              <article className="cities__card place-card" key={offer.id} onMouseOver={() => handleActiveCard(offer)}>
                <OfferCards offer={offer} newCard="cities"/>
              </article>))
          }
          </div>
        </section>
        <div className="cities__right-section">
          <section className='cities__map map'>
            <Map offers={offers} activeCard={activeCard} city={currentCity}/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ListCards;
