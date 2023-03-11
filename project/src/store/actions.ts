import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';
import {AuthorizationStatus, SortingValueTypes} from '../const';

export const cityChangeAction = createAction<{city: string}>('city/change');
export const setOffersDataLoadingStatus = createAction<boolean>('offers/etOffersDataLoadingStatus');
export const sortOffersActions = createAction<{sortType: SortingValueTypes}>('offers/sort');
export const loadOffersAction = createAction<Offers>('offers/load');
export const requireAuthorizationAction = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setErrorAction = createAction<string | null>('app/setError');

