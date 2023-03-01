import { City } from '../types/city';
import {OfferType} from './../types/offer';

export const calculateStarRating = (rating: number): number => Math.round(rating) * 20;

export const getOffersByCity = (offers: OfferType[], city: City): OfferType[] => offers.filter((offer) => city.name === offer.city.name);
