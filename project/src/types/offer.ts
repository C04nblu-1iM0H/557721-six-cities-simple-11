import {City} from './city';

export type OfferType = {
    id:number;
    city:City;
    images:string[];
    isPremium: boolean;
    previewImage: string;
    price:number;
    rating: number;
    title:string;
    typeOfplacement:string;
    bedrooms:number;
    maxAduts:number;
    goods:string[];
    host:{
        avatarUrl:string;
        id:number;
        isPro:boolean;
        name:string;
    };
    description:string;
    location: {
        latitude: number;
        longitude: number;
        zoom: number;
    };
};

export type Offers = OfferType[];

