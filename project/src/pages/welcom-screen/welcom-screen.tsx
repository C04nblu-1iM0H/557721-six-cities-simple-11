import ListCards from '../../components/ListCards/ListCards';
import CityList from '../../components/city-list/city-list';

function WelcomScreenMain(): JSX.Element {

  return(
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityList />
      </div>
      <ListCards />
    </main>
  );
}

export default WelcomScreenMain;

