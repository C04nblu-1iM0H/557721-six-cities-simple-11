import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';
import {OfferType} from '../types/offer';
import {City} from './../types/city';
import {Comments} from '../types/review';
import {AuthorizationStatus, SortingValueTypes, AppRoute} from '../const';

export const cityChangeAction = createAction<City>('city/change');
export const setOffersDataLoadingStatus = createAction<boolean>('offers/etOffersDataLoadingStatus');
export const sortOffersActions = createAction<{sortType: SortingValueTypes}>('offers/sort');
export const loadOffersAction = createAction<Offers>('offers/load');
export const loadCurrentOfferAction = createAction<OfferType>('offer/load');
export const loadCurrentCommentsAction = createAction<Comments>('comments/load');
export const loadCurrentNearOffersAction = createAction<Offers>('offer/loadNearOffers');
export const requireAuthorizationAction = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setErrorAction = createAction<string | null>('app/setError');
export const setUserEmail = createAction<string | null>('user/email');

export const redirectToRouteAction = createAction<AppRoute>('app/redirectToRoute');

