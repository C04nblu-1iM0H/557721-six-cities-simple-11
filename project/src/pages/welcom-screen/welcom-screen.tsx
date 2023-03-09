import {useAppSelector} from '../../hooks/index';
import ListCards from '../../components/ListCards/ListCards';
import CityList from '../../components/city-list/city-list';
import {City} from '../../types/city';


type OffersPage = {
  cities: City[];
};

function WelcomScreenMain({cities}:OffersPage): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  return(
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityList cities={cities} currentCity={currentCity}/>
      </div>
      <ListCards currentCity={currentCity} />
    </main>
  );
}

export default WelcomScreenMain;

