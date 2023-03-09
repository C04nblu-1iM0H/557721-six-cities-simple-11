import { Link } from 'react-router-dom';
import {useAppDispatch} from '../../hooks/index';
import {cityChangeAction} from '../../store/actions';
import { City } from '../../types/city';

type CityListProps ={
cities:City[];
currentCity:City;
}

function CityList({cities, currentCity}:CityListProps):JSX.Element{
  const dispatch = useAppDispatch();

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        { cities.map((city) => (
          <li className="locations__item" key={city.name}>
            <Link
              className={`locations__item-link tabs__item ${city.name === currentCity.name ? 'tabs__item--active' : '' }`}
              onClick={()=>{
                dispatch(cityChangeAction({city}));
              }}
              to=''
            >
              <span>{city.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CityList;
