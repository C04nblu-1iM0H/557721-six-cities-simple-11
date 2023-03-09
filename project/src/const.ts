//объявляем через перечесление enum все маршруты в Web-приложении
export enum AppRoute{
    Login = '/login',
    Root = '/',
    Room = ':id',
    Offers = '/offer'
}

export const ratings: number[] = [5, 4, 3, 2, 1];

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

type TypesForSorting = {
    Popular: string;
    Low:string;
    High:string;
    Top:string;
};

export const SortingValue: TypesForSorting = {
  Popular:'Popular',
  Low: 'Price: low to high',
  High: 'Price: high to low',
  Top: 'Top rated first'
};
