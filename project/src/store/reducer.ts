import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../const';
import {SortingValueTypes, AuthorizationStatus } from '../const';
import {cityChangeAction, setOffersDataLoadingStatus , sortOffersActions, loadOffersAction, loadCurrentCommentsAction, loadCurrentOfferAction, loadCurrentNearOffersAction, requireAuthorizationAction, setErrorAction} from './actions';
import {Offers} from '../types/offer';
import { City } from '../types/city';
import {OfferType} from '../types/offer';
import {Comments} from '../types/review';

type InitialState = {
  city: City;
  offers: Offers;
  currentOffer: OfferType | null;
  currentComments: Comments;
  currentNearOffers: Offers;
  sortType: SortingValueTypes;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
  userEmail: string | null;
}

const initialState: InitialState = {
  city: cities[1],
  offers: [],
  currentOffer: null,
  currentComments: [],
  currentNearOffers: [],
  sortType: SortingValueTypes.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
  userEmail: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadCurrentOfferAction, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadCurrentCommentsAction, (state, action) => {
      state.currentComments = action.payload;
    })
    .addCase(loadCurrentNearOffersAction, (state, action) => {
      state.currentNearOffers = action.payload;
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
      state.city = action.payload;
    })
    .addCase(sortOffersActions, (state, action) => {
      state.sortType = action.payload.sortType;
    });
});

export {reducer};
