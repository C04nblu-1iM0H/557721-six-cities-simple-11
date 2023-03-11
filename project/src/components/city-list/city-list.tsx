import { Link } from 'react-router-dom';
import {useAppDispatch} from '../../hooks/index';
import {cityChangeAction} from '../../store/actions';
import { City } from '../../types/city';
import {cities} from '../../const';

type CityListProps ={
currentCity:City;
}

function CityList({currentCity}:CityListProps):JSX.Element{
  const dispatch = useAppDispatch();

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        { cities.map((city) => (
          <li className="locations__item" key={city}>
            <Link
              className={`locations__item-link tabs__item ${city === currentCity.name ? 'tabs__item--active' : '' }`}
              onClick={()=>{
                dispatch(cityChangeAction({city}));
              }}
              to=''
            >
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CityList;
