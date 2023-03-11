import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../mocks/cities';
import {SortingValueTypes, AuthorizationStatus } from '../const';
import {cityChangeAction, setOffersDataLoadingStatus , sortOffersActions, loadOffersAction, requireAuthorizationAction, setErrorAction, } from './actions';
import {Offers} from '../types/offer';
import { City } from '../types/city';

type InitialState = {
  city: City;
  offers: Offers;
  sortType: SortingValueTypes;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  city: cities[1],
  offers: [],
  sortType: SortingValueTypes.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload;
    })
    .addCase(cityChangeAction, (state, action) => {
      const currentCity = cities.find((city) => action.payload.city === city.name);
      if (currentCity) {
        state.city = currentCity;
      }
    })
    .addCase(sortOffersActions, (state, action) => {
      state.sortType = action.payload.sortType;
    });
});

export {reducer};
