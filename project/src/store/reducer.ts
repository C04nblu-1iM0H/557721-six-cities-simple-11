import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../mocks/cities';
import {offers} from '../mocks/offers';
import {cityChangeAction, getOfRentalOffersActions} from './actions';
import {getOffersByCity} from '../utils/utils';

const initialState = {
  city: cities[1],
  offers: getOffersByCity(offers, cities[1])
};

const reducer = createReducer(initialState,
  (builder) =>{
    builder
      .addCase(getOfRentalOffersActions, (state , action) =>{
        state.offers = getOffersByCity(offers, action.payload.city);
      })
      .addCase(cityChangeAction, (state, action) =>{
        state.city = action.payload.city;
      });
  }
);

export {reducer};
