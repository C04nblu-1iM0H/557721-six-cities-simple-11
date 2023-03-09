import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/index';
import NotFoundScreen from '../../pages/not-fount-screen/not-found-screen';
import {OfferType} from '../../types/offer';
import {Review} from '../../types/review';
import Reviews from '../../components/reviews/reviews';
import {calculateStarRating} from '../../utils/utils';
import OfferCards from '../../components/OfferCards/OfferCards';
import Map from '../../components/map/map';

type Offers = {
  reviews: Review[];
}

function RoomScreen({reviews}: Offers): JSX.Element {
  const [activeCard, setActiveCard] = useState<OfferType | undefined>(undefined);
  const offers = useAppSelector((state) => state.offers);
  const handleActiveCard = (card: OfferType):void => {
    setActiveCard(card);
  };
  const params = useParams();
  const presentOffer = offers.find((vl)=> vl.id.toString() === params.id);
  if (!presentOffer) {
    return (
      <NotFoundScreen />
    );
  }
  const currentReviews:Review[] = [];
  reviews.forEach((review)=> review.idHostel === presentOffer.id ? currentReviews.push(review) : false);

  const {title, typeOfplacement, price, images, isPremium, rating, bedrooms, maxAduts, insides, host, description} = presentOffer;

  const propertyImages = images.map((image) => (
    <div className="property__image-wrapper" key={image}>
      <img className="property__image" src={image} alt="studio"/>
    </div>
  ));

  const conveniences = insides.map((inside) =>(
    <li className="property__inside-item" key={inside}>{inside}</li>
  ));

  const nextOffers = offers.filter((offer)=>offer.id !== presentOffer.id);

  return(
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {propertyImages}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            { isPremium ? <div className="property__mark"><span>Premium</span></div> : ''}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${calculateStarRating(rating)}% `}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {typeOfplacement}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
              </li>
              <li className="property__feature property__feature--adults">
                  Max {maxAduts} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro; {price} </b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {conveniences}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : '' } user__avatar-wrapper`}>
                  <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="avatar"/>
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
                {host.isPro ? <span className="property__user-status">Pro</span> : ''}
              </div>
              <div className="property__description">
                <p className="property__text">{description}</p>
              </div>
            </div>
            <Reviews reviews={currentReviews} />
          </div>
        </div>
        <section className="property__map map">
          <Map offers={nextOffers} activeCard={activeCard} currentCity={presentOffer.city} mapStyle={'property'}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {
              nextOffers.map((nextOffer) =>(
                <article className="near-places__card place-card" key={nextOffer.id} onMouseOver={() => handleActiveCard(nextOffer)}>
                  <OfferCards offer={nextOffer} newCard="near-places"/>
                </article>))
            }
          </div>
        </section>
      </div>
    </main>
  );
}


export default RoomScreen;
