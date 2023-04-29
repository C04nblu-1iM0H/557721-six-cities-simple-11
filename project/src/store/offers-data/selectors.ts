import {OfferType} from './../../types/offer';
import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offers} from '../../types/offer';
import {createSelector} from '@reduxjs/toolkit';
import {getOffersByCity} from '../../utils/utils';
import {SortOffersType} from '../../utils/sorting';
import {getCity, getSortTypes} from './../app-process/selectors';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getCurrentOffer = (state: State): OfferType | null => state[NameSpace.Offers].currentOffer;
export const getCurrentNearOffers = (state: State): Offers => state[NameSpace.Offers].currentNearOffers;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Offers].hasError;

export const getOffersToRender = createSelector(
  getOffers,
  getCity,
  getSortTypes,
  (offers, city, SortingValueTypes) => {
    const filteredOffers = getOffersByCity(offers, city);
    return SortOffersType(filteredOffers, SortingValueTypes);
  }
);
