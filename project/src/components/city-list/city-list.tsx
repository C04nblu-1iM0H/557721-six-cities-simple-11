import { Link } from 'react-router-dom';
import {useAppDispatch} from '../../hooks/index';
import {useAppSelector} from '../../hooks';
import {changeCity} from '../../store/app-process/app-process';
import {cities} from '../../const';
import {getCity} from '../../store/app-process/selectors';


function CityList():JSX.Element{
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        { cities.map((city) => (
          <li className="locations__item" key={city.name}>
            <Link
              className={`locations__item-link tabs__item ${city.name === currentCity.name ? 'tabs__item--active' : '' }`}
              onClick={()=>{
                dispatch(changeCity(city));
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
