import { OfferType } from '../types/offer';
import { SortingValue } from '../const';

const sortLowHight = (offers1: OfferType, offers2: OfferType): number => offers1.price - offers2.price;


const sortHightLow = (offers1: OfferType, offers2: OfferType): number => {
  if(offers1.price < offers2.price){
    return 1;
  }

  if(offers1.price === offers2.price){
    return 0;
  }

  return -1;
};

const sortByRating = (offers1: OfferType, offers2: OfferType): number => {
  if(offers1.rating < offers2.rating){
    return 1;
  }

  if(offers1.rating === offers2.rating){
    return 0;
  }

  return -1;
};

export const SortOffersType = (offers: OfferType[], type: string) =>{
  switch(type){
    case SortingValue.Popular:
      return offers;
    case SortingValue.Low:
      return offers.sort(sortLowHight);
    case SortingValue.High:
      return offers.sort(sortHightLow);
    case SortingValue.Top:
      return offers.sort(sortByRating);
    default:
      return offers;
  }
};

