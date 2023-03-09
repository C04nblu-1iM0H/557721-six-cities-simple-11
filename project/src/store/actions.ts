import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city';

export const cityChangeAction = createAction<{city: City}>('city/change');
export const getOfRentalOffersActions = createAction('offers/get');
export const sortOffersActions = createAction<{sortType: string}>('offers/sort');

