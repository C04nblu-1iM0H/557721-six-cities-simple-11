import {SortingValueTypes} from './../const';
import {City} from './city';
import {Comments} from './review';
import {AuthorizationStatus} from '../const';
import {store} from '../store/index';
import {OfferType, Offers} from './offer';

export type State = ReturnType<typeof store.getState>;

export type AppProcess = {
  city: City;
  sortType: SortingValueTypes;
  error: string | null;
  userEmail: string | null;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type OffersData = {
  isOffersDataLoading: boolean;
  offers: Offers;
  currentOffer: OfferType | null;
  currentNearOffers: Offers;
  hasError: boolean;
}

export type CommentsData = {
  currentComments: Comments;
}

export type AppDispatch = typeof store.dispatch;
