import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import NotFoundScreen from '../../pages/not-fount-screen/not-found-screen';
import HeaderLogo from '../../components/headerLogo/headerLogo';
import {OfferType} from '../../types/offer';
import {Review} from '../../types/review';
import Reviews from '../../components/reviews/reviews';
import {calculateStarRating} from '../../utils/utils';
import OfferCards from '../../components/OfferCards/OfferCards';
import Map from '../../components/map/map';

type Offers = {
  offers: OfferType[];
  reviews: Review[];
}

function RoomScreen({offers, reviews}: Offers): JSX.Element {
  const [activeCard, setActiveCard] = useState<OfferType | undefined>(undefined);
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
    <div className="page">
      <Helmet>
        <title>Six cities. Room</title>
      </Helmet>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <HeaderLogo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
            <Map offers={nextOffers} activeCard={activeCard} city={presentOffer.city} newMap="property"/>
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
    </div>
  );
}


export default RoomScreen;
