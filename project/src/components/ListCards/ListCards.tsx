import {useAppSelector} from '../../hooks/index';
import { useState } from 'react';
import { OfferType } from '../../types/offer';
import OfferCards from '../../components/OfferCards/OfferCards';
import NotFoundOffers from '../notFoundOffers/notFoundOffers';
import Map from '../map/map';
import SortingOptions from '../SortingOptions/SortingOptions';
import {getOffersByCity} from '../../utils/utils';
import {SortOffersType} from '../../utils/sorting';
import {City} from '../../types/city';

type Offers = {
    currentCity: City;
}

function ListCards({currentCity}:Offers): JSX.Element {
  const [activeCard, setActiveCard] = useState<OfferType | undefined>(undefined);
  const handleActiveCard = (card: OfferType):void => {
    setActiveCard(card);
  };
  let offers = useAppSelector((state) => getOffersByCity(state.offers, currentCity));
  const sortType = useAppSelector((state) => state.sortType);
  offers = SortOffersType(offers, sortType);

  if(offers.length === 0){
    return <NotFoundOffers currentCity={currentCity.name}/>;
  }

  return(
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
          <SortingOptions/>
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
            <Map offers={offers} activeCard={activeCard} currentCity={currentCity} mapStyle={'main'}/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ListCards;
