import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../mocks/cities';
import {offers} from '../mocks/offers';
import { City } from '../types/city';
import { OfferType } from '../types/offer';
import {cityChangeAction, getOfRentalOffersActions, sortOffersActions} from './actions';
import { SortingValue } from '../const';

const initialState: {
  city:City;
  offers:OfferType[];
  sortType:string;
} = {
  city: cities[0],
  offers: [],
  sortType: SortingValue.Popular
};

const reducer = createReducer(initialState,
  (builder) =>{
    builder
      .addCase(getOfRentalOffersActions, (state) =>{
        state.offers = offers;
      })
      .addCase(cityChangeAction, (state, action) =>{
        state.city = action.payload.city;
      })
      .addCase(sortOffersActions, (state, action) =>{
        state.sortType = action.payload.sortType;
      });
  }
);

export {reducer};
