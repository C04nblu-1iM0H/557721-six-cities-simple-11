import {useAppSelector} from '../../hooks/index';
import { useState } from 'react';
import { OfferType } from '../../types/offer';
import OfferCards from '../../components/OfferCards/OfferCards';
import NotFoundOffers from '../notFoundOffers/notFoundOffers';
import Map from '../map/map';
import SortingOptions from '../SortingOptions/SortingOptions';
import {getOffersByCity} from '../../utils/utils';
import {SortOffersType} from '../../utils/sorting';
import {getSortTypes} from '../../store/app-process/selectors';
import {getOffers} from '../../store/offers-data/selectors';
import { getCity } from '../../store/app-process/selectors';


function ListCards(): JSX.Element {
  const currentCity = useAppSelector(getCity);
  const allOffers = useAppSelector(getOffers);
  const [activeCard, setActiveCard] = useState<OfferType | undefined>(undefined);
  let offers = useAppSelector((state) => getOffersByCity(allOffers, currentCity));
  const sortType = useAppSelector(getSortTypes);
  offers = SortOffersType(offers, sortType);

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
            <Map offers={offers} activeCard={activeCard} city={currentCity} mapStyle={'main'}/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ListCards;
