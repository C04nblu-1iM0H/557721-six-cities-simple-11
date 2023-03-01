import React from 'react';
import {Helmet} from 'react-helmet-async';
import ListCards from '../../components/ListCards/ListCards';
import CityList from '../../components/city-list/city-list';
import HeaderLogo from '../../components/headerLogo/headerLogo';
import NotFoundOffers from '../../components/notFoundOffers/notFoundOffers';
import {OfferType} from '../../types/offer';
import {City} from '../../types/city';


type OffersPage = {
  offers: OfferType[];
  cities: City[];
  currentCity: City;
};

function WelcomScreenMain({offers, cities, currentCity}:OffersPage): JSX.Element {
  return(
    <React.Fragment>
      <Helmet>
        <title>Six cities</title>
      </Helmet>
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
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList cities={cities} currentCity={currentCity}/>
        </div>
        {offers.length > 0 ? <ListCards offers={offers} currentCity={currentCity} /> : <NotFoundOffers currentCity={currentCity.name}/>}
      </main>
    </React.Fragment>
  );
}

export default WelcomScreenMain;

