import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city';

export const cityChangeAction = createAction<{city: City}>('city/change');
export const getOfRentalOffersActions = createAction<{city: City}>('offers/get');
