/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Link} from 'react-router-dom';
import {OfferType} from '../../types/offer';
import {calculateRating} from '../function/settings';

type Offers = {
  offer: OfferType;
  newCard:string;
}

function OfferCards({offer, newCard}: Offers): JSX.Element {
  const {title, price, typeOfplacement, previewImage, rating, isPremium, id} = offer;
  return(
    <React.Fragment>
      { isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}

      <div className={`${newCard}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${calculateRating(rating)}% `}} />
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{typeOfplacement}</p>
      </div>
    </React.Fragment>
  );
}
export default OfferCards;
