import {useAppSelector} from '../../hooks/index';
import ListCards from '../../components/ListCards/ListCards';
import CityList from '../../components/city-list/city-list';

function WelcomScreenMain(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  return(
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityList currentCity={currentCity}/>
      </div>
      <ListCards currentCity={currentCity} />
    </main>
  );
}

export default WelcomScreenMain;

